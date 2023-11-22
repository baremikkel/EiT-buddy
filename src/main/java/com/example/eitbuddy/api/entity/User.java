package com.example.eitbuddy.api.entity;

import jakarta.persistence.*;
import java.security.SecureRandom;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

/**
 * This is to create the rows in the tables
 */

@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private  Long id;
    @Column(name = "name")
    private String name;
    @Column(name = "email")
    private String email;
    @Column(name = "password")
    private String password;
    @Column (name = "salt")
    private byte[] salt = new byte[8];
    public User(){}
    public User(String name, String email, String password){
        this.salt = randomSalt(); 
        this.name = name;
        this.email = email;
        this.password = hashedString(password, this.salt);
    }

    private byte[] randomSalt() {
        byte[] salt = new byte[8];
        SecureRandom random = new SecureRandom();
        random.nextBytes(salt);
        return salt;
    }

    private String hashedString(String input, byte[] salt) {
        String saltedInput = new String(salt, StandardCharsets.UTF_8) + input;
        try {
            MessageDigest digestor = MessageDigest.getInstance("SHA-256");
            byte[] hash = digestor.digest(saltedInput.getBytes(StandardCharsets.UTF_8));

            // Convert the byte array to a hexadecimal string
            StringBuilder hexString = new StringBuilder();
            for (byte b : hash) {
                String hex = Integer.toHexString(0xff & b);
                if (hex.length() == 1) {
                    hexString.append('0');
                }
                hexString.append(hex);
            }
            return hexString.toString();
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
            // Handle exception
            return null;
        }
    }

    public boolean validate(String password) {        
        return this.password.equals(hashedString(password, this.salt));
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword(){
        return password;
        // can not be used anymore
    }

    public void setPassword(String password) {
        this.salt = randomSalt(); // renewing salt is good practice
        this.password = hashedString(password, this.salt);
    }

    @Override
    public String toString() {
        return "User: {"+"id="+this.id+", name='"+this.name+'\''+", email='"+this.email+'\''+'}';
    }
}
