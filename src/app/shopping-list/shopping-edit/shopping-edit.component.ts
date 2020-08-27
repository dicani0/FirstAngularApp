import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: [ './shopping-edit.component.scss' ]
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput', { static: false }) nameInputReference: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInputReference: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddItem() {
    const newIngredient = new Ingredient(this.nameInputReference.nativeElement.value, this.amountInputReference.nativeElement.value);
    this.ingredientAdded.emit(newIngredient);
    console.log(newIngredient);
  }
}
