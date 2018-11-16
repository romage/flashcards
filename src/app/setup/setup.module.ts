import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CollectionsComponent } from './components/collections/collections.component';
import { MaterialModule } from '../shared/material.module';
import { EditCollectionComponent } from './components/edit-collection/edit-collection.component';
import { AddCardComponent } from './components/add-card/add-card.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'collections', component: CollectionsComponent},
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];
@NgModule({
  declarations: [
    HomeComponent,
    CollectionsComponent,
    EditCollectionComponent,
    AddCardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [ RouterModule ],
})
export class SetupModule {

}
