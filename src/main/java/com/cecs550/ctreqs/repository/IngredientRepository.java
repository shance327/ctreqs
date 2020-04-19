package com.cecs550.ctreqs.repository;

import com.cecs550.ctreqs.dto.IngredientResponse;
import com.cecs550.ctreqs.model.Ingredient;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IngredientRepository extends CrudRepository<Ingredient, Integer> {
    @Query("SELECT new com.cecs550.ctreqs.dto.IngredientResponse(r.recipeId, r.recipeName, r.imgUrl) " +
            "FROM Recipe r, Ingredient i, Uses u " +
            "WHERE r.recipeId = u.recipeId and i.id = u.ingredientId and i.id = :id")
    public List<IngredientResponse> myGetRecipesByIID(@Param("id") Integer id);
}
