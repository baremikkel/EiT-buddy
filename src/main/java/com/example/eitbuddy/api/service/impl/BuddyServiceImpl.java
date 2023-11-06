package com.example.eitbuddy.api.service.impl;

import com.example.eitbuddy.api.EntityNotFoundException;
import com.example.eitbuddy.api.entity.Buddy;
import com.example.eitbuddy.api.entity.User;
import com.example.eitbuddy.api.repository.BuddyRepo;
import com.example.eitbuddy.api.repository.UserRepo;
import com.example.eitbuddy.api.service.BuddyServices;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class BuddyServiceImpl implements BuddyServices {
    private final BuddyRepo buddyRepo;
    private final UserRepo userRepo;

    public BuddyServiceImpl(BuddyRepo buddyRepo, UserRepo userRepo) {
        this.buddyRepo = buddyRepo;
        this.userRepo = userRepo;
    }

    @Override
    public List<Buddy> findAllBuddies() {
        return buddyRepo.findAll();
    }

    @Override
    public Optional<Buddy> findById(Long id) {
        return buddyRepo.findById(id);
    }

    @Override
    public Buddy addBuddy(Buddy buddy) {
        return buddyRepo.save(buddy);
    }

    @Override
    public Buddy assignUser(Long userid, Long buddyid) {
        Buddy buddy = buddyRepo.findById(buddyid)
                .orElseThrow(() -> new EntityNotFoundException("Buddy not found"));
        User user = userRepo.findById(userid)
                .orElseThrow(() -> new EntityNotFoundException("User not found"));
        buddy.setUser(user);
        return buddyRepo.save(buddy);
    }

    @Override
    public Buddy removeUser(Long buddyid, Long userid) {
        Buddy buddy = buddyRepo.findById(buddyid)
                .orElseThrow(() -> new EntityNotFoundException("Buddy not found"));
        User user = userRepo.findById(userid)
                .orElseThrow(() -> new EntityNotFoundException("User not found"));
        buddy.setUser(user);
        if(user.equals(buddy.getUser())){
            buddy.setUser(null);
        }
        return buddyRepo.save(buddy);
    }

    @Override
    public Buddy changePlantType(Long id, String plant) {
        return null;
    }
}
