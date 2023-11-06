package com.example.eitbuddy.api.entity;

import jakarta.persistence.*;
import jakarta.persistence.Id;

import java.sql.Timestamp;
import java.util.Date;

@Entity
@Table(name = "sensorvalues")
public class SensorData {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;
    @ManyToOne
    private Buddy buddy;
    @Column(name = "temperature")
    private Double temperature;
    @Column(name = "light")
    private Double light;
    @Column(name = "soil")
    private Double soil;
    @Column(name = "time")
    private Date time;

    public SensorData(Long id, Buddy buddy, Double temperature, Double light, Double soil, Double humidity, Timestamp time) {
        this.id = id;
        this.buddy = buddy;
        this.temperature = temperature;
        this.light = light;
        this.soil = soil;
        this.time = time;
    }

    public SensorData() {

    }
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Buddy getBuddy() {
        return buddy;
    }

    public void setBuddy(Buddy buddy) {
        this.buddy = buddy;
    }

    public Double getTemperature() {
        return temperature;
    }

    public void setTemperature(Double temperature) {
        this.temperature = temperature;
    }

    public Double getLight() {
        return light;
    }

    public void setLight(Double light) {
        this.light = light;
    }

    public Double getSoil() {
        return soil;
    }

    public void setSoil(Double soil) {
        this.soil = soil;
    }

    public Date getTime() {
        return time;
    }

    public void setTime(Date time) {
        this.time = time;
    }

    @Override
    public String toString() {
        return "SensorData{" +
                "id=" + id +
                ", buddy=" + buddy +
                ", temperature=" + temperature +
                ", light=" + light +
                ", soil=" + soil +
                ", time=" + time +
                '}';
    }
}
