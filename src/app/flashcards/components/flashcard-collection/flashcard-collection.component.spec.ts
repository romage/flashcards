import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashcardCollectionComponent } from './flashcard-collection.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { MaterialModule } from 'src/app/shared/material.module';
import { AppRoutingModule } from 'src/app/app-routing.module';

describe('FlashcardCollectionComponent', () => {
  let component: FlashcardCollectionComponent;
  let fixture: ComponentFixture<FlashcardCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlashcardCollectionComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      imports: [
        HttpClientModule,
        AppRoutingModule,
        MaterialModule
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlashcardCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
