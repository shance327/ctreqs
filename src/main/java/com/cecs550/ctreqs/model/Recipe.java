package com.cecs550.ctreqs.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "Recipe")
public class Recipe implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "RecipeID")
    private Integer recipeId;

    @Column(name = "RecipeName")
    private String recipeName;

    @Column(name = "Instructions")
    private String instructions;

    @Column(name = "imgurl")
    private String imgUrl;

    public Integer getRecipeId() {
        return recipeId;
    }

    public void setRecipeId(Integer recipeId) {
        this.recipeId = recipeId;
    }

    public String getRecipeName() {
        return recipeName;
    }

    public void setRecipeName(String recipeName) {
        this.recipeName = recipeName;
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
