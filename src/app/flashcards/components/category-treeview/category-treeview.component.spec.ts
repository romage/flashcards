import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryTreeviewComponent } from './category-treeview.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MaterialModule } from 'src/app/shared/material.module';

describe('CategoryTreeviewComponent', () => {
  let component: CategoryTreeviewComponent;
  let fixture: ComponentFixture<CategoryTreeviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryTreeviewComponent ],
      schemas: [ NO_ERRORS_SCHEMA],
      imports: [ MaterialModule ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryTreeviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
