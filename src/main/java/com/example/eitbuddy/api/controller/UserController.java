package com.example.eitbuddy.api.controller;

import com.example.eitbuddy.api.entity.Buddy;
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
    private final BuddyServices buddyServices;

    public UserController(UserServices userServices, BuddyServices buddyServices) {
        this.userServices = userServices;
        this.buddyServices = buddyServices;
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
        return userServices.updateUserEmail(id, name);
    }
    @PutMapping("/{id}/email")
    public User updateUserEmail(@PathVariable("id") Long id, @RequestParam("email") String email){
        return userServices.updateUserPassword(id, email);
    }
    @PutMapping("/{id}/password")
    public User updateUserPassword(@PathVariable("id") Long id, @RequestParam("password") String password){
        return userServices.updateUserPassword(id, password);
    }
    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable("id") Long id){
        userServices.removeUser(id);
    }


}
