package com.example.eitbuddy.api.service.impl;

import com.example.eitbuddy.api.entity.User;
import com.example.eitbuddy.api.repository.Repository;
import com.example.eitbuddy.api.service.UserServices;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 * Implementations for the services
 */
@Service
public class ServiceImpls implements UserServices {
    private  final Repository repository;
    public ServiceImpls(Repository repository) {
        this.repository = repository;
    }
    @Override
    public List<User> findAllUsers() {
        return repository.findAll();
    }
    @Override
    public Optional<User> findById(Long id) {
        return repository.findById(id);
    }
    @Override
    public User addUser(User user) {
        return repository.save(user);
    }
    @Override
    public User updateUser(User user) {
        return repository.save(user);
    }
    @Override
    public void removeUser(Long id) {
        repository.deleteById(id);
    }
}