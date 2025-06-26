package com.example.demo;

import jakarta.persistence.*;

@Entity
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String vehicle;
    private String model;
    private String date;
    private int duration;
    private String payment;

    // ✅ Default constructor
    public Booking() {}

    // ✅ Parameterized constructor (optional)
    public Booking(String name, String vehicle, String model, String date, int duration, String payment) {
        this.name = name;
        this.vehicle = vehicle;
        this.model = model;
        this.date = date;
        this.duration = duration;
        this.payment = payment;
    }

    // ✅ Getters and Setters

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getVehicle() {
        return vehicle;
    }

    public String getModel() {
        return model;
    }

    public String getDate() {
        return date;
    }

    public int getDuration() {
        return duration;
    }

    public String getPayment() {
        return payment;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setVehicle(String vehicle) {
        this.vehicle = vehicle;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public void setDuration(int duration) {
        this.duration = duration;
    }

    public void setPayment(String payment) {
        this.payment = payment;
    }

    @Override
    public String toString() {
        return "Booking{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", vehicle='" + vehicle + '\'' +
                ", model='" + model + '\'' +
                ", date='" + date + '\'' +
                ", duration=" + duration +
                ", payment='" + payment + '\'' +
                '}';
    }
}
