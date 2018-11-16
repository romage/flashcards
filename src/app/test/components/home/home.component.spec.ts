import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('updatePerson', () => {
    it('given id and new value will update the collection', () => {
        component.people = [
          { 'id' : 1, firstname: 'andy', lastname: 'rome' },
          { 'id' : 2, firstname: 'andrew', lastname: 'rome' },
          { 'id' : 3, firstname: 'fred', lastname: 'rome' }
      ];
      component.updatePerson(3, 'paul');

      expect(component.people[2].firstname).toBe('paul');   // this is accessing via the array index not the collection id
    });

  });
});
