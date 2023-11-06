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
    User updateUser(User user);
    void removeUser(Long id);

}
