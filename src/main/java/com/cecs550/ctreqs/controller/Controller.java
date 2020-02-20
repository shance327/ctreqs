package com.cecs550.ctreqs.controller;

import com.cecs550.ctreqs.dto.IngredientResponse;
import com.cecs550.ctreqs.dto.RecipeResponse;
import com.cecs550.ctreqs.model.Ingredient;
import com.cecs550.ctreqs.model.Recipe;
import com.cecs550.ctreqs.repository.IngredientRepository;
import com.cecs550.ctreqs.repository.RecipeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@RestController
public class Controller {
    @Autowired
    private RecipeRepository recipeRepository;

    @Autowired
    private IngredientRepository ingredientRepository;

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

    @GetMapping("api/recipes/joined")
    public List<RecipeResponse> getJoinedInfo() {
        return recipeRepository.myGetJoinedInfo();
    }

    @GetMapping("api/ingredients/{id}")
    public List<IngredientResponse> getRecipesByIID(@PathVariable final Integer id) {
        return ingredientRepository.myGetRecipesByIID(id);
    }


}

