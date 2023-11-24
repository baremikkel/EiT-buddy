package com.example.eitbuddy.api.service;

import com.example.eitbuddy.api.EntityNotFoundException;
import com.example.eitbuddy.api.entity.Buddy;
import com.example.eitbuddy.api.entity.User;
import com.example.eitbuddy.api.repository.BuddyRepo;
import com.example.eitbuddy.api.repository.UserRepo;
import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BuddyServices {
    private final BuddyRepo buddyRepo;
    private final UserRepo userRepo;
    @Autowired
    private EntityManager entityManager;

    public BuddyServices(BuddyRepo buddyRepo, UserRepo userRepo) {
        this.buddyRepo = buddyRepo;
        this.userRepo = userRepo;
    }

    public List<Buddy> findAllBuddies() {
        return buddyRepo.findAll();
    }

    public Optional<Buddy> findById(Long id) {
        return buddyRepo.findById(id);
    }

    public Buddy addBuddy(Buddy buddy) {
        return buddyRepo.save(buddy);
    }

    public Buddy assignUser(Long userid, Long buddyid) {
        Buddy buddy = buddyRepo.findById(buddyid)
                .orElseThrow(() -> new EntityNotFoundException("Buddy not found"));
        User user = userRepo.findById(userid)
                .orElseThrow(() -> new EntityNotFoundException("User not found"));
        buddy.setUser(user);
        return buddyRepo.save(buddy);
    }

    public Buddy removeUser(Long buddyid, Long userid) {
        Buddy buddy = buddyRepo.findById(buddyid)
                .orElseThrow(() -> new EntityNotFoundException("Buddy not found"));
        User user = userRepo.findById(userid)
                .orElseThrow(() -> new EntityNotFoundException("User not found"));
        buddy.setUser(user);
        if (user.equals(buddy.getUser())) {
            buddy.setUser(null);
        }
        return buddyRepo.save(buddy);
    }

    public Buddy changePlantType(Long id, String plant) {
        Optional<Buddy> buddyOptional = buddyRepo.findById(id);
        if (buddyOptional.isPresent()) {
            Buddy buddy = buddyOptional.get();
            buddy.setPlant_type(plant);
            return buddyRepo.save(buddy);
        } else
            throw new EntityNotFoundException("User with ID" + id + " not found");
    }

    public List<Buddy> getAllUsersBuddies(Long userId) {
        String jpql = "SELECT b FROM Buddy b WHERE b.user.id = :userId";
        TypedQuery<Buddy> query = entityManager.createQuery(jpql, Buddy.class);
        query.setParameter("userId", userId);
        return query.getResultList();
    }

    public List<Buddy> getUnclaimedBuddies() {
        String jpql = "SELECT b FROM Buddy b WHERE b.user IS NULL";
        TypedQuery<Buddy> query = entityManager.createQuery(jpql, Buddy.class);
        return query.getResultList();
    }
}
