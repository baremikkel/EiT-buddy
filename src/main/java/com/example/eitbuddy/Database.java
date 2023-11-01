package com.example.eitbuddy;

import java.sql.*;

public class Database {
    private Connection connection = null;
    protected Database db_connection;
    private String url = "x"; //"jdbc:postgresql://localhost:5432/postgres"
    private String user = "x";
    private String password = "x";
    public Database() throws SQLException{ //When initializing the communicator it connects to the db.
        try {
            connection = DriverManager.getConnection(url, user, password);
            System.out.println("Connected");
        } catch (SQLException exception) {
            System.out.println(exception.getMessage());
        }

    }

    public Database getConnection() throws SQLException {
        if(db_connection == null)
            return new Database();
        else
            return db_connection;
    }
}
