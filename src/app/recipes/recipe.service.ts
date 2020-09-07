import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>()
    private recipes: Recipe[] = [
        new Recipe('Test',
            'Testing the test description',
            'https://www.nps.gov/subjects/camping/images/recipe_1.jpg',
            [
                new Ingredient("Bread", 5),
                new Ingredient("Tomato", 2)
            ]),
        new Recipe('Test',
            'Testing the test description',
            'https://www.nps.gov/subjects/camping/images/recipe_1.jpg',
            [
                new Ingredient("Eggs", 3),
                new Ingredient("Milk", 2)
            ])
    ];

    constructor(private shoppingListService: ShoppingListService) { }
    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }
}