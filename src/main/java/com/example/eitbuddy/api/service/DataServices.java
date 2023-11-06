package com.example.eitbuddy.api.service;

import com.example.eitbuddy.api.EntityNotFoundException;
import com.example.eitbuddy.api.entity.Buddy;
import com.example.eitbuddy.api.entity.SensorData;
import com.example.eitbuddy.api.repository.BuddyRepo;
import com.example.eitbuddy.api.repository.DataRepo;
import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.Date;
import java.util.List;

@Service
public class DataServices {
    private final DataRepo dataRepo;
    private final BuddyRepo buddyRepo;
    @Autowired
    private EntityManager entityManager;

    public DataServices(DataRepo dataRepo, BuddyRepo buddyRepo) {
        this.dataRepo = dataRepo;
        this.buddyRepo = buddyRepo;
    }

    public List<SensorData> getData(Long buddyid){
        String jpql = "SELECT d FROM SensorData d WHERE d.buddy.id = :buddyid";
        TypedQuery<SensorData> query = entityManager.createQuery(jpql, SensorData.class);
        query.setParameter("buddyid", buddyid);
        return query.getResultList();
    }
    public SensorData insertData(Long buddyId, Double temperature, Double light, Double humidity){
        SensorData data = new SensorData();
        Buddy buddy = buddyRepo.findById(buddyId).orElseThrow(() -> new EntityNotFoundException("Buddy not found"));
        data.setBuddy(buddy);
        data.setTemperature(temperature);
        data.setLight(light);
        data.setHumidity(humidity);
        data.setTime((Timestamp) new Date());
        return data;
    }
}
