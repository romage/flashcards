import { Component, OnInit } from '@angular/core';
import { FlatCategory } from '../../models/flat-category';
import { FlashcardsService } from '../../flashcards.service';

@Component({
  selector: 'app-flat-categories',
  templateUrl: './flat-categories.component.html',
  styleUrls: ['./flat-categories.component.scss']
})
export class FlatCategoriesComponent implements OnInit {

  flatcategories: FlatCategory[] = [];
  constructor(private svc: FlashcardsService) { }

  ngOnInit() {
    this.svc.getFlatCategories()
      .subscribe(data => {
        this.flatcategories = data;
      });
  }

  showInfo(cat: FlatCategory) {
    console.log(cat);
  }

}
