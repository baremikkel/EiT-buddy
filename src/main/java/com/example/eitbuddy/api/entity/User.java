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
    private String salt;
    public User(){}
    public User(String name, String email, String password){
        this.salt = randomSalt(); 
        this.name = name;
        this.email = email;
        this.password = hashedString(password, this.salt);
    }

    private String randomSalt() {
        // the salt is generated using bytes for full 256 coverage
        byte[] salts = new byte[16]; // 16 bytes makes for 3.4E38
        SecureRandom random = new SecureRandom();
        random.nextBytes(salts);
        StringBuilder hexBuilder = new StringBuilder();
        for (byte b : salts) {
            hexBuilder.append(String.format("%02X", b));
            // the %02X means 2 digit hex where 0 serves as padding
        }
        return hexBuilder.toString();
        // the salt is in hexadecimal String format for consistency
    }

    private String hashedString(String input, String salt) {
        String saltedInput = input + salt;
        try {
            MessageDigest SHA256 = MessageDigest.getInstance("SHA-256");
            byte[] hashes = SHA256.digest(saltedInput.getBytes(StandardCharsets.UTF_8));

            StringBuilder hexBuilder = new StringBuilder();
            for (byte b : hashes) {
                hexBuilder.append(String.format("%02X", b));
            }

            return hexBuilder.toString();
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
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

    public void setSalt() {
        this.salt = randomSalt();
    }
    
    public String getSalt() {
        return salt;
    }

    public String getPassword(){
        return password;
        // can not be used anymore
    }

    public void setPassword(String password) {
        setSalt(); // renewing salt is good practice
        this.password = hashedString(password, this.salt);
    }

    @Override
    public String toString() {
        return "User: {"+"id="+this.id+", name='"+this.name+'\''+", email='"+this.email+'\''+'}';
    }
}
