import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories;
  constructor(private service : CategoryService) { }

  ngOnInit() {
    this.service.get().subscribe(categoryObject => {
      this.categories = categoryObject;
    });
  }

}
