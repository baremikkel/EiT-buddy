package com.example.eitbuddy.api.controller;

import com.example.eitbuddy.api.entity.User;
import com.example.eitbuddy.api.service.BuddyServices;
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
    @PutMapping("/{id}/name")
    public User updateUserName(@PathVariable("id") Long id, @RequestParam("name") String name){
        return userServices.updateUserName(id, name);
    }
    @PutMapping("/{id}/email")
    public User updateUserEmail(@PathVariable("id") Long id, @RequestParam("email") String email){
        return userServices.updateUserEmail(id, email);
    }
    @PutMapping("/{id}/password")
    public User updateUserPassword(@PathVariable("id") Long id, @RequestParam("password") String password){
        return userServices.updateUserPassword(id, password);
    }
    @PutMapping("/{id}/salt")
    public User updateUserSalt(@PathVariable("id") Long id, @RequestParam("salt") String salt){
        return userServices.updateUserSalt(id, salt);
    }
    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable("id") Long id){
        userServices.removeUser(id);
    }


}
