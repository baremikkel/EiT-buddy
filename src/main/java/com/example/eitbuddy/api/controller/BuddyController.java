package com.example.eitbuddy.api.controller;

import com.example.eitbuddy.api.entity.Buddy;
import com.example.eitbuddy.api.entity.User;
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
    public List<Buddy> findAllBuddies(){
        return buddyServices.findAllBuddies();
    }
    @GetMapping("/{id}")
    public Optional<Buddy> findBuddyById(@PathVariable("id") Long id){
        return buddyServices.findById(id);
    }
    @PostMapping
    public Buddy addBuddy(@RequestBody Buddy buddy){return buddyServices.addBuddy(buddy);}
    @PutMapping("/{id}/type")
    public Buddy changeType(@PathVariable("id") Long id, @RequestParam("type") String type){
        return buddyServices.changePlantType(id, type);
    }
}