import { TestBed } from '@angular/core/testing';

import { FlashcardsService } from './flashcards.service';
import { HttpClientModule } from '@angular/common/http';

describe('FlashcardsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientModule ]
  }));

  it('should be created', () => {
    const service: FlashcardsService = TestBed.get(FlashcardsService);
    expect(service).toBeTruthy();
  });
});
