package com.example.eitbuddy.api.controller;

import com.example.eitbuddy.api.entity.User;
import com.example.eitbuddy.api.service.UserServices;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/users")
/**
 * This class is the controller for the users table in the database
 */
public class UserController {
    private final UserServices userServices;

    public UserController(UserServices userServices) {
        this.userServices = userServices;
    }
    @GetMapping
    public List<User> findAllUsers(){
        return userServices.findAllUsers();
    }
    @GetMapping("/{id}")
    public Optional<User> findUserById(@PathVariable("id") Long id) {
        return userServices.findById(id);
    }
    @PostMapping
    public User addUser(@RequestBody User user){
        return userServices.addUser(user);
    }
    @PutMapping
    public User updateUser(@RequestBody User user){
        return userServices.updateUser(user);
    }
    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable("id") Long id){
        userServices.removeUser(id);
    }
}
