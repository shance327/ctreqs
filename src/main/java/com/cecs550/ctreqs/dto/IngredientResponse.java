package com.cecs550.ctreqs.dto;

import lombok.Data;
import lombok.ToString;

@Data
@ToString
public class IngredientResponse implements Comparable<IngredientResponse>{
    private Integer recipeId;
    private String recipeName;
    private Integer count = 0;

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

    public Integer getCount() {
        return count;
    }

    public void setCount(Integer count) {
        this.count = count;
    }

    @Override
    public int compareTo(IngredientResponse o) {
        return this.getCount().compareTo(o.getCount());
    }
}
