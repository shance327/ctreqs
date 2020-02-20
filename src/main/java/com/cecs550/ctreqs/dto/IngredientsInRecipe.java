package com.cecs550.ctreqs.dto;

import lombok.Data;
import lombok.ToString;

@Data
@ToString
public class IngredientsInRecipe {
    private Integer ingredientId;
    private String ingredientName;
    private float measure;
    private String unit;

    public IngredientsInRecipe(Integer ingredientId, String ingredientName, float measure, String unit) {
        this.ingredientId = ingredientId;
        this.ingredientName = ingredientName;
        this.measure = measure;
        this.unit = unit;
    }

    public Integer getIngredientId() {
        return ingredientId;
    }

    public void setIngredientId(Integer ingredientId) {
        this.ingredientId = ingredientId;
    }

    public String getIngredientName() {
        return ingredientName;
    }

    public void setIngredientName(String ingredientName) {
        this.ingredientName = ingredientName;
    }

    public float getMeasure() {
        return measure;
    }

    public void setMeasure(float measure) {
        this.measure = measure;
    }

    public String getUnit() {
        return unit;
    }

    public void setUnit(String unit) {
        this.unit = unit;
    }
}
