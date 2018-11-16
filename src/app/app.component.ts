import { Component, OnInit } from '@angular/core';
import { FlashcardsService } from './flashcards/flashcards.service';
import { Category } from './flashcards/models/category';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActivatedRoute, RouterStateSnapshot, Router, UrlSegment, NavigationEnd } from '@angular/router';
import { Card } from './flashcards/models/card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  sidenavState = false;
  title = 'flashcards';
  constructor(
   ) {}

  ngOnInit() {

  }




}
