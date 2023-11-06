package com.example.eitbuddy.api.repository;

import com.example.eitbuddy.api.entity.SensorData;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DataRepo extends JpaRepository<SensorData, Long> {
}
