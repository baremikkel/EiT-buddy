package com.example.eitbuddy.api.service;

import com.example.eitbuddy.api.entity.Buddy;

import java.util.List;
import java.util.Optional;

public interface BuddyServices {
    List<Buddy> findAllBuddies();
    Optional<Buddy> findById(Long id);
    Buddy addBuddy(Buddy buddy);
    Buddy assignUser(Long userid, Long buddyid );
    Buddy removeUser(Long buddyid, Long userid);
    Buddy changePlantType(Long id, String plant);
    List<Buddy> getAllUsersBuddies(Long userId);
}
