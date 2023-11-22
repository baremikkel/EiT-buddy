package com.example.eitbuddy.api.service;

import com.example.eitbuddy.api.EntityNotFoundException;
import com.example.eitbuddy.api.entity.User;
import com.example.eitbuddy.api.repository.UserRepo;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 * Implementations for the services
 */
@Service
public class UserServices {
    private final UserRepo userRepo;

    public UserServices(UserRepo userRepo) {
        this.userRepo = userRepo;
    }
    public List<User> findAllUsers() {
        return userRepo.findAll();
    }
    public Optional<User> findById(Long id) {
        return userRepo.findById(id);
    }
    public User addUser(User user) {
        return userRepo.save(user);
    }
    public User updateUserName(Long id, String name) {
        Optional<User> UserOptional = userRepo.findById(id);
        if(UserOptional.isPresent()){
            User user = UserOptional.get();
            user.setName(name);
            return userRepo.save(user);
        } else
            throw new EntityNotFoundException("User with ID" + id + " not found");

    }
    public User updateUserEmail(Long id, String email) {
        Optional<User> UserOptional = userRepo.findById(id);
        if(UserOptional.isPresent()){
            User user = UserOptional.get();
            user.setEmail(email);
            return userRepo.save(user);
        } else
            throw new EntityNotFoundException("User with ID" + id + " not found");

    }
    public User updateUserPassword(Long id, String password) {
        Optional<User> UserOptional = userRepo.findById(id);
        if(UserOptional.isPresent()){
            User user = UserOptional.get();
            user.setPassword(password);
            return userRepo.save(user);
        } else
            throw new EntityNotFoundException("User with ID" + id + " not found");
    }
    public User updateUserSalt(Long id, byte[] salt) {
        Optional<User> UserOptional = userRepo.findById(id);
        if(UserOptional.isPresent()){
            User user = UserOptional.get();
            user.setSalt();
            return userRepo.save(user);
        } else
            throw new EntityNotFoundException("User with ID" + id + " not found");
    }
    public void removeUser(Long id) {
        userRepo.deleteById(id);
    }
}
