package com.example.eitbuddy;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = "com.example.eitbuddy.api")
public class EiTBuddyApplication {

    public static void main(String[] args) {
        SpringApplication.run(EiTBuddyApplication.class, args);
    }

}
