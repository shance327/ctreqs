package com.cecs550.ctreqs.repository;

import com.cecs550.ctreqs.model.Recipe;
import org.springframework.data.repository.CrudRepository;

public interface RecipeRepository extends CrudRepository<Recipe, Integer> {
}
