package com.cecs550.ctreqs.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name="Recipe")
public class Recipe implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "RecipeID")
    private Integer id;

    @Column(name = "RecipeName")
    private String name;

    @Column(name = "Instructions")
    private String instructions;

    @Column(name = "imgurl")
    private String imgUrl;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getInstructions() {
        return instructions;
    }

    public void setInstructions(String instructions) {
        this.instructions = instructions;
    }

    public String getImgUrl() {
        return imgUrl;
    }

    public void setImgUrl(String imgUrl) {
        this.imgUrl = imgUrl;
    }
}
