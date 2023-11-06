package com.example.eitbuddy.api.repository;

import com.example.eitbuddy.api.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * This interface is meant to gain access to all the tools necessary
 */
@org.springframework.stereotype.Repository
public interface Repository extends JpaRepository<User, Long> {

}
