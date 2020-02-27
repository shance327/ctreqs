package com.cecs550.ctreqs.dto;

import lombok.Data;
import lombok.ToString;

@Data
@ToString
public class RecipeResponse {
    private Integer recipeId;
    private String recipeName;
    private String instructions;
    private String imgUrl;
    private Integer ingredientId;
    private String ingredientName;
    private float measure;
    private String unit;

    public RecipeResponse(Integer recipeId, String recipeName, String instructions, String imgUrl, Integer ingredientId, String ingredientName, float measure, String unit) {
        this.recipeId = recipeId;
        this.recipeName = recipeName;
        this.instructions = instructions;
        this.imgUrl = imgUrl;
        this.ingredientId = ingredientId;
        this.ingredientName = ingredientName;
        this.measure = measure;
        this.unit = unit;
    }

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
