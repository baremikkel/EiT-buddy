package com.example.eitbuddy.api.repository;

import com.example.eitbuddy.api.entity.Buddy;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BuddyRepo extends JpaRepository<Buddy, Long> {
}
