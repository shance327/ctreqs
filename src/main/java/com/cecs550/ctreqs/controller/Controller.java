package com.cecs550.ctreqs.controller;

import com.cecs550.ctreqs.dto.IngredientResponse;
import com.cecs550.ctreqs.dto.IngredientsInRecipe;
import com.cecs550.ctreqs.dto.RecipeResponse;
import com.cecs550.ctreqs.dto.RecipeResponseFormatted;
import com.cecs550.ctreqs.model.Ingredient;
import com.cecs550.ctreqs.model.Recipe;
import com.cecs550.ctreqs.repository.IngredientRepository;
import com.cecs550.ctreqs.repository.RecipeRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
public class Controller {
    private final RecipeRepository recipeRepository;
    private final IngredientRepository ingredientRepository;

    public Controller(RecipeRepository recipeRepository, IngredientRepository ingredientRepository) {
        this.recipeRepository = recipeRepository;
        this.ingredientRepository = ingredientRepository;
    }

    @GetMapping("/api/recipes")
    public Iterable<Recipe> findAllRecipes() {
        return recipeRepository.findAll();
    }

    @GetMapping("/api/recipes/{id}")
    public Optional<Recipe> findRecipeById(@PathVariable final Integer id) {
        return recipeRepository.findById(id);
    }

    @GetMapping("api/ingredients")
    public Iterable<Ingredient> findAllIngredients() {
        return ingredientRepository.findAll();
    }

    @GetMapping("api2/recipes/{id}")
    public RecipeResponseFormatted getJoinedInfo(@PathVariable final Integer id) {
        List<RecipeResponse> recipeResponses = recipeRepository.myGetJoinedInfo(id);
        RecipeResponse recipeResponse = recipeResponses.get(0);
        RecipeResponseFormatted recipeResponseFormatted = new RecipeResponseFormatted(
                recipeResponse.getRecipeId(), recipeResponse.getRecipeName(),
                recipeResponse.getInstructions(), recipeResponse.getImgUrl()
        );

        List<IngredientsInRecipe> ingredientsInRecipes = new ArrayList<IngredientsInRecipe>() {};
        for(RecipeResponse response: recipeResponses) {
            ingredientsInRecipes.add(new IngredientsInRecipe(response.getIngredientId(),
                    response.getIngredientName(), response.getMeasure(), response.getUnit()));
        }
        recipeResponseFormatted.setIngredientsInRecipe(ingredientsInRecipes);
        return recipeResponseFormatted;
    }

    @GetMapping("api/ingredients/{id}")
    public List<IngredientResponse> getRecipesByIID(@PathVariable final Integer id) {
        return ingredientRepository.myGetRecipesByIID(id);
    }
}

