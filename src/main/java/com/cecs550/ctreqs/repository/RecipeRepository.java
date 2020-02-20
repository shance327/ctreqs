package com.cecs550.ctreqs.repository;

import com.cecs550.ctreqs.dto.RecipeResponse;
import com.cecs550.ctreqs.model.Recipe;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface RecipeRepository extends CrudRepository<Recipe, Integer> {
    @Query("SELECT new com.cecs550.ctreqs.dto.RecipeResponse(r.id, r.name, r.instructions, r.imgUrl, i.id, i.name, u.measure, u.units)" +
            "FROM Recipe r, Ingredient i, Uses u " +
            "WHERE r.id = u.recipeId and i.id = u.ingredientId")
    public List<RecipeResponse> myGetJoinedInfo();
}
