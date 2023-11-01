package com.example.eitbuddy;

import java.sql.*;
import io.github.cdimascio.dotenv.Dotenv;

public class Database {
    Dotenv dotenv = Dotenv.configure().load();
    private Connection connection = null;
    protected static Database db_connection;
    private String url = dotenv.get("DATABASE_URL");
    private String user = dotenv.get("DATABASE_USERNAME");
    private String password = dotenv.get("DATABASE_PASSWORD");

    public static void main(String[] args){
        try {
            Database database = getConnection();
            //database.insertUser("a","s","d");
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }
    public Database() {
        try {
            connection = DriverManager.getConnection(url, user, password);
            System.out.println("Connected");
        } catch (SQLException exception) {
            System.out.println(exception.getMessage());
        }
    }

    public void insertUser(String name, String mail, String pass) throws SQLException {
        //PreparedStatement insert = connection.prepareStatement("INSERT INTO Users(name, email, password) VALUES ('"+ name+","+mail+","+pass +"')");
        PreparedStatement insert = connection.prepareStatement("INSERT INTO Users(name, email, password) VALUES ('admin','admin@buddy.dk','admin')");
        insert.execute();
    }

    static public Database getConnection() throws SQLException {
        if(db_connection == null)
            db_connection = new Database();
        return db_connection;
    }
}
