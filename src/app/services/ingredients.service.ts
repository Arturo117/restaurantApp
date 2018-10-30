import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";

export class IngredientsService{
    ingredientsChanged= new EventEmitter<Ingredient[]>();
    startedEditing = new Subject<number>();
    private ingredients: Ingredient [] = [
        new Ingredient('Tomatoes', 5),
        new Ingredient('Apples', 3)
    ];
    getIngredients(){
        return this.ingredients.slice();
    }
    getIngredient(index: number){
        return this.ingredients[index];
    }
    addIngredient(ingredient: Ingredient){
        
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
    addIngredients(auxIngredients: Ingredient[]){
        for(const i of auxIngredients){
            var NombreMA = this.ingredients.find(x=>x.name == i.name);
            if(NombreMA != null){
              let Nuevo = NombreMA.amount + i.amount;
              NombreMA.getIngrediente(Nuevo);
               // this.ingredients.push(new Ingredient[NombreMA.name,5]);   
            }else{
               this.ingredients.push(i);
            }
            this.ingredientsChanged.emit(this.ingredients.slice());
            
        }
        
    }
}