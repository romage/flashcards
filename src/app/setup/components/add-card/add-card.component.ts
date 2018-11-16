import { Component, OnInit, Input } from '@angular/core';
import { Collection } from 'src/app/flashcards/models/collection';
import { FlashcardsService } from 'src/app/flashcards/flashcards.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Card } from 'src/app/flashcards/models/card';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.scss']
})
export class AddCardComponent implements OnInit {
  @Input() collection: Collection;
  cardFormGroup: FormGroup;
  id: FormControl;
  question: FormControl;
  answer: FormControl;
  tags: FormControl;
  constructor(private flashcardsService: FlashcardsService) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    // this.collection.cards[0].
    this.id = new FormControl('');
    this.question = new FormControl('');
    this.answer = new FormControl('');
    this.tags = new FormControl('');

    this.cardFormGroup = new FormGroup({
      id: this.id,
      question: this.question,
      answer: this.answer,
      tags: this.tags
    });

  }

  onSubmit() {
      // const newCard = <Card>this.cardFormGroup.value;
      // this.collection.cards.push(newCard);
  }

}
