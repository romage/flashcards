import { Component, OnInit } from '@angular/core';
import { FlashcardsService } from 'src/app/flashcards/flashcards.service';
import { Collection } from 'src/app/flashcards/models/collection';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss']
})
export class CollectionsComponent implements OnInit {
  collections: Collection[] = [];
  constructor(private flashcardsService: FlashcardsService) { }

  ngOnInit() {
    this.flashcardsService.getAllCollections().subscribe(data => {
        this.collections = data;
    });
    localStorage.setItem('wow', JSON.stringify(this.collections));
  }
}
