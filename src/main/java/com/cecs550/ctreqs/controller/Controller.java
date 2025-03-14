package com.cecs550.ctreqs.controller;

import com.cecs550.ctreqs.dto.IngredientResponse;
import com.cecs550.ctreqs.dto.IngredientsInRecipe;
import com.cecs550.ctreqs.dto.RecipeResponse;
import com.cecs550.ctreqs.dto.RecipeResponseFormatted;
import com.cecs550.ctreqs.model.Ingredient;
import com.cecs550.ctreqs.model.Recipe;
import com.cecs550.ctreqs.repository.IngredientRepository;
import com.cecs550.ctreqs.repository.RecipeRepository;
import org.springframework.web.bind.annotation.*;

import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;


@RestController
@RequestMapping("/v1")
public class Controller {
    private final RecipeRepository recipeRepository;
    private final IngredientRepository ingredientRepository;

    public Controller(RecipeRepository recipeRepository, IngredientRepository ingredientRepository) {
        this.recipeRepository = recipeRepository;
        this.ingredientRepository = ingredientRepository;
    }

    //Return all the recipes in the recipe table
    @GetMapping("/recipes")
    public Iterable<Recipe> findAllRecipes() {
        return recipeRepository.findAll();
    }

    //Return a specific recipe given the ID
    @GetMapping("/recipe/{id}")
    public Optional<Recipe> findRecipeById(@PathVariable final Integer id) {
        return recipeRepository.findById(id);
    }

    //Return all ingredients in the ingredient table
    @GetMapping("/ingredients")
    public Iterable<Ingredient> findAllIngredients() {
        return ingredientRepository.findAll();
    }

    //Return all the info about a recipe and a list of ingredients
    @GetMapping("/recipe-all/{id}")
    public RecipeResponseFormatted getJoinedInfo(@PathVariable final Integer id) {
        List<RecipeResponse> recipeResponses = recipeRepository.myGetJoinedInfo(id);
        RecipeResponse recipeResponse = recipeResponses.get(0);
        RecipeResponseFormatted recipeResponseFormatted = new RecipeResponseFormatted(
                recipeResponse.getRecipeId(), recipeResponse.getRecipeName(),
                recipeResponse.getInstructions(), recipeResponse.getImgUrl()
        );

        List<IngredientsInRecipe> ingredientsInRecipes = new ArrayList<IngredientsInRecipe>() {
        };
        for (RecipeResponse response : recipeResponses) {
            ingredientsInRecipes.add(new IngredientsInRecipe(response.getIngredientId(),
                    response.getIngredientName(), response.getMeasure(), response.getUnit()));
        }
        recipeResponseFormatted.setIngredientsInRecipe(ingredientsInRecipes);
        return recipeResponseFormatted;
    }

    //Return a list of recipes given the ingredient ID
    @GetMapping("/ingredients/{id}")
    public List<IngredientResponse> getRecipesByIID(@PathVariable final Integer id) {
        return ingredientRepository.myGetRecipesByIID(id);
    }

    //Return a list of recipes given a list of ingredient ids, order the recipes as most ingredients matched
    @GetMapping("/ingredientIds")
    public List<IngredientResponse> getRecipesByIIDs(@RequestParam("id") int[] ingredientIds) {
        List<IngredientResponse> recipeList = new ArrayList<IngredientResponse>();
        for (Integer id : ingredientIds) {
            List<IngredientResponse> ingredientResponses = ingredientRepository.myGetRecipesByIID(id);
            List<IngredientResponse> tempList = new ArrayList<IngredientResponse>();
            if (recipeList.size() == 0) {
                recipeList.addAll(ingredientResponses);
            } else {
                for (int i = 0; i < ingredientResponses.size(); i++) {
                    for (int j = 0; j < recipeList.size(); j++) {
                        if (recipeList.get(j).getRecipeId().equals(ingredientResponses.get(i).getRecipeId())) {
                            recipeList.get(j).setCount(recipeList.get(j).getCount() + 1);
                            break;
                        }
                        if (j + 1 == recipeList.size()) {
                            tempList.add(ingredientResponses.get(i));
                        }
                    }
                }
            }
            recipeList.addAll(tempList);
        }
        //recipeList = recipeList.stream().distinct().collect(Collectors.toList());
        recipeList.sort(Collections.reverseOrder());
        return recipeList;
    }

    //Return a random recipe
    @GetMapping("/randomRecipe")
    public Recipe getRandomRecipe() {
        Iterable<Recipe> recipes = recipeRepository.findAll();
        List<Recipe> recipeList = StreamSupport.stream(recipes.spliterator(), false)
                .collect(Collectors.toList());
        Random rand = new Random();

        return recipeList.get(rand.nextInt(recipeList.size()));
    }
}

