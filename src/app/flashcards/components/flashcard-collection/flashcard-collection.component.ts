import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FlashcardsService } from '../../flashcards.service';
import { Card } from '../../models/card';

@Component({
  selector: 'app-flashcard-collection',
  templateUrl: './flashcard-collection.component.html',
  styleUrls: ['./flashcard-collection.component.scss']
})
export class FlashcardCollectionComponent implements OnInit {
  cards: Card[];
  currentCard: Card;
  currentIndex = 0;
  nodata = true;
  constructor(
    private flashcardService: FlashcardsService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.activatedRoute.snapshot.url);
     this.activatedRoute.params.subscribe(e => {
      this.loadCards(e.category);
     });
  }

  loadCards(cat) {
    this.flashcardService
        .getCollection(cat)
        .subscribe(data => {
            if (data !== undefined && data.length > 0) {
              this.nodata = false;
              this.currentIndex = 0;
              this.cards = data;
              this.currentCard = this.cards[0];
            } else {
              this.nodata = true;
            }
        });
  }

  hasData() {
    return !this.nodata;
  }

  nextCard() {
    if (this.currentIndex < this.cards.length) {
      this.currentIndex ++;
      this.currentCard = this.cards[this.currentIndex];
    }
  }

}
