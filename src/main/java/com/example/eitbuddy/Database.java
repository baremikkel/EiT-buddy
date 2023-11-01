package com.example.eitbuddy;

import java.sql.*;

public class Database {
    private Connection connection = null;
    protected static Database db_connection;
    // TO DO: No suitable driver found for url //
    private String url = "jdbc:postgresql://localhost:5432/postgres";
    private String user = "postgres";
    private String password = "pass";

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
