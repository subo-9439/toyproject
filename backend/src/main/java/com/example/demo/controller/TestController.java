package com.example.demo.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class TestController {

    @PostMapping()
    public ResponseEntity<?> getTest(@RequestBody TestForm testForm) {
        return new ResponseEntity<>(testForm, HttpStatus.CREATED);
    }
}
