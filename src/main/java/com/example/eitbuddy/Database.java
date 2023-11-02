package com.example.eitbuddy;

import java.sql.*;

import io.github.cdimascio.dotenv.Dotenv;

public class Database {
    Dotenv dotenv = Dotenv.configure().load();
    private Connection connection = null;
    protected static Database db_connection;
    private final String url = dotenv.get("DATABASE_URL");
    private final String user = dotenv.get("DATABASE_USERNAME");
    private final String password = dotenv.get("DATABASE_PASSWORD");

    public static void main(String[] args) {
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

    public void addNewUser(String name, String mail, String pass) throws SQLException {
        PreparedStatement insert = connection.prepareStatement("INSERT INTO Users(name, email, password) VALUES (?,?,?)");
        insert.setString(1, name);
        insert.setString(2, mail);
        insert.setString(3, pass);
        insert.executeUpdate();
    }

    public void addBuddy(int userId, String planttype) throws SQLException {
        PreparedStatement insert = connection.prepareStatement("INSERT INTO buddies(userid, planttype) VALUES (?,?)");
        insert.setInt(1, userId);
        insert.setString(2, planttype);
    }

    public void insertData(int buddyId, double temperature, double light, double humidity) throws SQLException {
        PreparedStatement insert = connection.prepareStatement("INSERT INTO sensorvalues(buddyid, temperature, light, soil) VALUES (?,?,?,?)");
        insert.setInt(1, buddyId);
        insert.setDouble(2, temperature);
        insert.setDouble(3, light);
        insert.setDouble(4, humidity);
    }
    public ResultSet collectData(int buddy) throws SQLException {
        ResultSet set = null;
        try {
            connection.createStatement().executeQuery("SELECT temperature,light,soil FROM sensorvalues WHERE buddyid = " + buddy);
        } catch (SQLException e) {
            e.getMessage();
        }
        return set;
    }
    public ResultSet getBuddies(int user) {
        ResultSet set = null;
        try {
            connection.createStatement().executeQuery("SELECT planttype FROM buddies WHERE userid=" + user);
        } catch (SQLException e ){
            e.getMessage();
        }
        return set;
    }
    public ResultSet getUser(int user) {
        ResultSet set = null;
        try {
            connection.createStatement().executeQuery("SELECT name, email FROM users WHERE id=" + user);
        } catch (SQLException e ){
            e.getMessage();
        }
        return set;
    }

    static public Database getConnection() throws SQLException {
        if (db_connection == null)
            db_connection = new Database();
        return db_connection;
    }
}
