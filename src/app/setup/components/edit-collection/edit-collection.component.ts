import { Component, OnInit, Input } from '@angular/core';
import { Collection } from 'src/app/flashcards/models/collection';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-collection',
  templateUrl: './edit-collection.component.html',
  styleUrls: ['./edit-collection.component.scss']
})
export class EditCollectionComponent implements OnInit {
  @Input() collection: Collection;
  formGroup: FormGroup;
  id: FormControl;
  constructor() { }

  ngOnInit() {
  }

  // createForm() {
  //   this.id = new FormControl('', Validators.required);

  //   this.formGroup = new FormGroup({
  //     id: this.id
  //     cards:
  //   });
  // }

}
