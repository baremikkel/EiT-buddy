package com.example.eitbuddy.api.controller;

import com.example.eitbuddy.api.entity.Buddy;
import com.example.eitbuddy.api.service.BuddyServices;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/buddies")
public class BuddyController {
    private final BuddyServices buddyServices;

    public BuddyController(BuddyServices buddyServices) {
        this.buddyServices = buddyServices;
    }

    @GetMapping
    public List<Buddy> findAllBuddies() {
        return buddyServices.findAllBuddies();
    }

    @GetMapping("/{id}")
    public Optional<Buddy> findBuddyById(@PathVariable("id") Long id) {
        return buddyServices.findById(id);
    }

    @GetMapping("/unClaimed")
    public List<Buddy> findUnclaimedBuddies() {
        return buddyServices.getUnclaimedBuddies();
    }

    @PostMapping
    public Buddy addBuddy(@RequestBody Buddy buddy) {
        return buddyServices.addBuddy(buddy);
    }

    @PutMapping("/{id}/type")
    public Buddy changeType(@PathVariable("id") Long id, @RequestParam("type") String type) {
        return buddyServices.changePlantType(id, type);
    }

    @PutMapping("/{userid}/addbuddy/{buddy}")
    public Buddy addBuddy(@PathVariable("userid") Long id, @PathVariable("buddy") Long buddyId) {
        return buddyServices.assignUser(id, buddyId);
    }

    @PutMapping("/{userid}/removebuddy/{buddy}")
    public Buddy removeBuddy(@PathVariable("userid") Long id, @PathVariable("buddy") Long buddyId) {
        return buddyServices.removeUser(buddyId, id);
    }

    @GetMapping("/{userid}/getBuddies")
    public List<Buddy> getBuddies(@PathVariable("userid") Long id) {
        return buddyServices.getAllUsersBuddies(id);
    }
}
