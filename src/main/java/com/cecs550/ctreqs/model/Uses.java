package com.cecs550.ctreqs.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "Uses")
@IdClass(UsesId.class)
public class Uses implements Serializable {
    @Id
    @Column(name = "RecipeID")
    private Integer recipeId;

    @Id
    @Column(name = "IngredientID")
    private Integer ingredientId;

    @Column(name = "Measure")
    private float measure;

    @Column(name = "Units")
    private String units;

    public Integer getRecipeId() {
        return recipeId;
    }

    public void setRecipeId(Integer recipeId) {
        this.recipeId = recipeId;
    }

    public Integer getIngredientId() {
        return ingredientId;
    }

    public void setIngredientId(Integer ingredientId) {
        this.ingredientId = ingredientId;
    }

    public float getMeasure() {
        return measure;
    }

    public void setMeasure(float measure) {
        this.measure = measure;
    }

    public String getUnits() {
        return units;
    }

    public void setUnits(String units) {
        this.units = units;
    }
}
