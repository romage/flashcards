import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashcardComponent } from './flashcard.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('FlashcardComponent', () => {
  let component: FlashcardComponent;
  let fixture: ComponentFixture<FlashcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlashcardComponent ],
      imports: [ BrowserAnimationsModule, MaterialModule ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlashcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
