import { Component,OnInit} from '@angular/core';
import { Food } from '../shared/models/Food';
import { FoodService } from '../services/food.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  foods:Food[]=[];
  constructor(private foodService:FoodService,activatedRoute:ActivatedRoute){
let foodsObservable:Observable<Food[]>

    activatedRoute.params.subscribe((params)=>{
      if(params.searchTerm)
      foodsObservable = this.foodService.getAllFoodsBySearchTerm(params.searchTerm);
      else if(params.tag)
      foodsObservable= this.foodService.getAllFoodByTag(params.tag);

      else
      foodsObservable = foodService.getAll();

      foodsObservable.subscribe((serviceFoods) => {
        this.foods=serviceFoods;
      })

    })


  }
  ngOnInit(): void {

  }

}