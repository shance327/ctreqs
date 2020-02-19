package com.cecs550.ctreqs.model;

import org.springframework.data.annotation.Id;

public class Ingredient {
    @Id
    private int id;

    private String name;
}
