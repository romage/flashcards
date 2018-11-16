import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { CollectionsComponent } from '../collections/collections.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'collections', component: CollectionsComponent},
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        CollectionsComponent ],
      imports: [
        RouterTestingModule,
        ],
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
});
