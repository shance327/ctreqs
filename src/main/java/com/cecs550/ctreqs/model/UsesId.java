package com.cecs550.ctreqs.model;

import java.io.Serializable;

public class UsesId implements Serializable {
    private long recipeId;
    private long ingredientId;

    public long getRecipeId() {
        return recipeId;
    }

    public void setRecipeId(long recipeId) {
        this.recipeId = recipeId;
    }

    public long getIngredientId() {
        return ingredientId;
    }

    public void setIngredientId(long ingredientId) {
        this.ingredientId = ingredientId;
    }
}
