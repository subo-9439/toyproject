package com.example.demo.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/test")
public class TestController {

    @GetMapping("/hello")
    public ResponseEntity<?> getTest(){
        return new ResponseEntity<>("Hello", HttpStatus.OK);
    }
    @PostMapping("/post")
    public ResponseEntity<?> postTest(@RequestBody TestForm testForm) {
        return new ResponseEntity<>(testForm, HttpStatus.CREATED);
    }
}
