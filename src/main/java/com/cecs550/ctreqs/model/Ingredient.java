package com.cecs550.ctreqs.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "Ingredients")
public class Ingredient implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "IngredientID")
    private int id;

    @Column(name = "IngredientName")
    private String name;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
