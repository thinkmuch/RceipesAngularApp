import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe(
      "Dip de Tres Chiles", 
      "Una receta perfecta para servir como botana en la siguiente Navidad", 
      "https://cdn.kiwilimon.com/recetaimagen/32815/37924.jpg"
      ),
    new Recipe(
      "Tortilla de Papa",
      "Las flores de calabaza le dan un toque especial a esta típica y clásica recetas de tortilla de patata",
      "https://dam.cocinafacil.com.mx/wp-content/uploads/2019/08/tortilla-de-flor-de-calabaza.jpg"
    ),
    new Recipe(
      "Albóndigas al Chipotle",
      "Cuando crees que la creatividad para cocinar se ha ido… la receta que menos imaginabas llega y te salva el día. Y esta vez se trata de unas mini albóndigas enchipotladas.",
      "https://dam.cocinafacil.com.mx/wp-content/uploads/2019/08/mini-albondigas-enchipotladas.jpg"
    )
  ];

  constructor() { }

  ngOnInit() {
  }

}
