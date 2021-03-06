import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";

export class IngredientsService{
    ingredientsChanged= new Subject<Ingredient[]>();
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
    deleteIngredient(index: number){
        console.log(index);
        this.ingredients.splice(index,1);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    
    addIngredient(ingredient: Ingredient){
        
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    updateIngredient(index: number, ingredient: Ingredient){
        this.ingredients[index] = ingredient;
        this.ingredientsChanged.next(this.ingredients.slice());
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
            this.ingredientsChanged.next(this.ingredients.slice());
            
        }
        
    }
}