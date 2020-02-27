package com.cecs550.ctreqs.dto;

import lombok.Data;
import lombok.ToString;

import java.util.List;

@Data
@ToString
public class RecipeResponseFormatted {
    private Integer recipeId;
    private String recipeName;
    private String instructions;
    private String imgUrl;

    private List<IngredientsInRecipe> ingredientsInRecipe;

    public RecipeResponseFormatted(Integer recipeId, String recipeName, String instructions, String imgUrl) {
        this.recipeId = recipeId;
        this.recipeName = recipeName;
        this.instructions = instructions;
        this.imgUrl = imgUrl;
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

    public List<IngredientsInRecipe> getIngredientsInRecipe() {
        return ingredientsInRecipe;
    }

    public void setIngredientsInRecipe(List<IngredientsInRecipe> ingredientsInRecipe) {
        this.ingredientsInRecipe = ingredientsInRecipe;
    }
}
