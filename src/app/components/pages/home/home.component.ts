import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  foods: Food[] = [];

  constructor(private foodService: FoodService, activateRoute: ActivatedRoute) {
    activateRoute.params.subscribe((params) => {
      if (params.searchTerm) {
        this.foods = foodService.getAllFoodsBySearchTerm(params.searchTerm);
      } else if (params.tag) {
        this.foods = foodService.getAllFoodsByTag(params.tag);
      } else {
        this.foods = foodService.getAll();
      }
    });
  }

  ngOnInit(): void {}
}