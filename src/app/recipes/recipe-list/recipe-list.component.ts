import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.module';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    // tslint:disable-next-line:max-line-length
    new Recipe('A test recipe', 'This is a simpy test', 'https://www.salepepe.it/files/2014/04/ricetta-lasagna-allo-zafferano-con-gli-asparagi-850x638.jpg'),
    // tslint:disable-next-line:max-line-length
    new Recipe('A test recipe', 'This is a simpy test', 'https://www.salepepe.it/files/2014/04/ricetta-lasagna-allo-zafferano-con-gli-asparagi-850x638.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
