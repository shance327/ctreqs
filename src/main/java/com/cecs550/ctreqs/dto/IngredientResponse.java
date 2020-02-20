package com.cecs550.ctreqs.dto;

import lombok.Data;
import lombok.ToString;

@Data
@ToString
public class IngredientResponse {
    private Integer recipeId;
    private String recipeName;

    public IngredientResponse(Integer recipeId, String recipeName) {
        this.recipeId = recipeId;
        this.recipeName = recipeName;
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
}
