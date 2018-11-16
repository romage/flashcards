import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CollectionsComponent } from './collections.component';
import { FlashcardsService } from 'src/app/flashcards/flashcards.service';
import { of } from 'rxjs';
import { Collection } from 'src/app/flashcards/models/collection';
import { By } from '@angular/platform-browser';

describe('setup collections components basic fixture', () => {
  let fixture: ComponentFixture<CollectionsComponent>;
  let flashcardsServiceMock;
  let COLLECTIONS: Collection[] = [];

  beforeEach(() => {
    COLLECTIONS =
     [
        {
          'id': 'sql',
          'cards': [
            {
              'id': 1,
              'title': 'Referrential integrity',
              'breadcrumb': [
                'technology',
                'sql'
              ],
              'tags': [
                'sql'
              ],
              'question': 'describe referential integrity ?',
              'answer_type': 'text',
              'answer': 'Referential primary key that is referenced by the foreign key.'
            },
            {
              'id': 2,
              'title': 'test card 2',
              'breadcrumb': [
                'b1',
                'b2'
              ],
              'tags': [
                'tag 1'
              ],
              'question': 'card 2 q 1',
              'answer_type': 'text',
              'answer': 'card 2 a 1.'
            }
        ]
      }
    ];
    flashcardsServiceMock = jasmine.createSpyObj(['getAllCollections']);
    TestBed.configureTestingModule({
      declarations: [CollectionsComponent],
      providers: [{ provide: FlashcardsService, useValue: flashcardsServiceMock }]
    });
    fixture = TestBed.createComponent(CollectionsComponent);

  });

  it('>>>>>>> should populate the collections field', () => {

    flashcardsServiceMock.getAllCollections.and.returnValue(of(COLLECTIONS));
    // fixture.componentInstance.collections
    fixture.detectChanges();
    expect(fixture.componentInstance.collections.length).toBe(1);
  });

  it('should show the first h2 tag to be id of the first collection - sql', () => {
    flashcardsServiceMock.getAllCollections.and.returnValue(of(COLLECTIONS));
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('h2').textContent).toContain('sql');
  });

  it('should show the first h2 tag to be id of the first collection - sql - v2', () => {
    flashcardsServiceMock.getAllCollections.and.returnValue(of(COLLECTIONS));
    fixture.detectChanges();
    const debugEl = fixture.debugElement.query(By.css('h2'));
    expect(debugEl.nativeElement.textContent).toContain('sql');
  });
});
