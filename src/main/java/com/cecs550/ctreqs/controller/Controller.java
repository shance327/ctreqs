package com.cecs550.ctreqs.controller;

import com.cecs550.ctreqs.model.Recipe;
import com.cecs550.ctreqs.repository.RecipeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;

@RestController
public class Controller {
    @Autowired
    private RecipeRepository recipeRepository;

    @GetMapping("/api/hello")
    public String hello() {
        return "Hello, the time at the server is now " + new Date() + "\n";
    }

    @GetMapping("/api/recipes")
    public Iterable<Recipe> findAllRecipes() {
        return recipeRepository.findAll();
    }
}

