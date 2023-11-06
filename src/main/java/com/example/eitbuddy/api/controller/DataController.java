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

    @PostMapping("/{buddyid}/temp/light/soil")
    public SensorData insertData(@PathVariable("buddyid") Long id, @RequestParam("temp") Double temp, @RequestParam("light") Double light, @RequestParam("soil") Double soil){
        return dataServices.insertData(id, temp, light, soil);
    }
    @GetMapping("/{buddyid}/getData")
    public List<SensorData> getData(@PathVariable("buddyid") Long id){
        return dataServices.getData(id);
    }

}
