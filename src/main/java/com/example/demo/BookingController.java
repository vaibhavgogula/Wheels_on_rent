package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity; // 🔥 THIS WAS MISSING
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
public class BookingController {

    @Autowired
    private BookingRepository bookingRepo;

   @PostMapping("/book")
public ResponseEntity<String> saveBooking(@RequestBody Booking booking) {
    System.out.println("📦 Booking received: " + booking); // log all fields
    bookingRepo.save(booking);
    return ResponseEntity.ok("Booking saved!");
}
}