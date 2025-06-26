package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
public class AuthController {

    @Autowired
    private UserRepository userRepo;

    @PostMapping("/register")
    public String register(@RequestBody User user) {
        if (userRepo.findByUsername(user.getUsername()) != null) {
            return "Username already exists!";
        }
        userRepo.save(user);
        return "Registered successfully!";
    }

    @PostMapping("/login")
    public String login(@RequestBody User user) {
        User existingUser = userRepo.findByUsername(user.getUsername());
        if (existingUser != null && existingUser.getPassword().equals(user.getPassword())) {
            return "Login successful!";
        }
        return "Invalid username or password";
    }
}
