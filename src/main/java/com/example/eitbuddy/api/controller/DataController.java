package com.example.eitbuddy.api.controller;

import com.example.eitbuddy.api.entity.SensorData;
import com.example.eitbuddy.api.service.DataServices;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/data")
public class DataController {
    private final DataServices dataServices;

    public DataController(DataServices dataServices) {
        this.dataServices = dataServices;
    }
    @PostMapping("/{buddyid}/addData")
    public SensorData insertData(@PathVariable("buddyid") Long id, @RequestBody SensorData data){
        return dataServices.insertData(id, data.getTemperature(), data.getLight(), data.getSoil());
    }
    @GetMapping("/{buddyid}/getData")
    public List<SensorData> getData(@PathVariable("buddyid") Long id){
        return dataServices.getData(id);
    }

}
