package com.example.eitbuddy.api.service;

import com.example.eitbuddy.api.entity.User;

import java.util.List;
import java.util.Optional;
/**
 * This interface is all the services to gain access to the users table
 */
public interface UserServices {
    List<User> findAllUsers();
    Optional<User> findById(Long id);
    User addUser(User user);
    User updateUserName(Long id, String name);
    User updateUserEmail(Long id, String email);
    User updateUserPassword(Long id, String password);
    void removeUser(Long id);

}
