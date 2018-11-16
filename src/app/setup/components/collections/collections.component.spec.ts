import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionsComponent } from './collections.component';
import { FlashcardsService } from 'src/app/flashcards/flashcards.service';
import { fchmodSync } from 'fs';
import { of } from 'rxjs';
import { Collection } from 'src/app/flashcards/models/collection';
import { Card } from 'src/app/flashcards/models/card';

describe('Setup>components>CollectionsComponent', () => {
  let component: CollectionsComponent;

  let flashcardsServiceMock;

  flashcardsServiceMock = jasmine.createSpyObj(['getCollection', 'getAllCollections']);

  component = new CollectionsComponent(flashcardsServiceMock);

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  describe('ngOnInit', () => {
    it('should call the getAllCollections', () => {
      const newCollection: Collection[] = [
        { id: 'testCollection', cards: [ <Card>{ id: 1, question: 'question', answer: 'answer'}]}
      ];

      flashcardsServiceMock.getAllCollections.and.returnValue(of(newCollection));
      component.collections = [];
      component.ngOnInit();
      expect(component.collections).toEqual(newCollection);
    });
  });

});
