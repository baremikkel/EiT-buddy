package com.example.eitbuddy.api.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "buddies")
public class Buddy {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;
    @ManyToOne
    private User user;

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    @Column(name = "planttype")
    private String plant_type;
    public Buddy() {
    }

    public Buddy(Long id, User user, String plant_type) {
        this.id = id;
        this.user = user;
        this.plant_type = plant_type;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPlant_type() {
        return plant_type;
    }

    public void setPlant_type(String plant_type) {
        this.plant_type = plant_type;
    }

    @Override
    public String toString() {
        return "Buddy: {"+"id="+this.id+", userid='"+this.user+'\''+", plant type='"+this.plant_type+'\''+'}';
    }
}
