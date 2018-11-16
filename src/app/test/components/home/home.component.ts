import { Component, OnInit } from '@angular/core';
import { Person } from '../../models/person';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  people: Person[] = [
    { 'id' : 1, firstname: 'andy', lastname: 'rome' },
    { 'id' : 2, firstname: 'andrew', lastname: 'rome' },
    { 'id' : 3, firstname: 'andrew', lastname: 'rome' }
];

ngOnInit() {}


  updatePerson(id: number, newFirstName: string) {
    this.people = this.people.map(p => {
        if (p.id === id) {
          return Object.assign({}, p, {firstname: newFirstName});
        }
    });

  }



}
