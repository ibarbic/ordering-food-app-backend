package com.example.Online.Food.Ordering.model;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;


@Data
public class ContactInformation {

    private  String email;

    private  String mobile;

    private String x;

    private String instagram;
}
