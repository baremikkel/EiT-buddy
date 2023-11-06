package com.example.eitbuddy.api.repository;

import com.example.eitbuddy.api.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User, Long> {
}
