import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../../models/card';
import { Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-flashcard',
  templateUrl: './flashcard.component.html',
  styleUrls: ['./flashcard.component.scss']
})
export class FlashcardComponent implements OnInit {
  @Input() card: Card;
  showQuestion = true;

  constructor() { }

  ngOnInit() {
  }

  showQustion() {
    return this.showQuestion;
  }

  flipcard() {
    this.showQuestion = !this.showQuestion;
  }

}

