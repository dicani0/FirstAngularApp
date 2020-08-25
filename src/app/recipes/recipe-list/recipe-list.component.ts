import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ParsedEventType } from '@angular/compiler';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  // @Output() eventName = new EventEmitter<ParsedEventType>(); 
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Test', 'Testing the test description', 'https://www.nps.gov/subjects/camping/images/recipe_1.jpg'),
    new Recipe('Test', 'Testing the test description', 'https://www.nps.gov/subjects/camping/images/recipe_1.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
