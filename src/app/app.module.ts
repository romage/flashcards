import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material.module';
import { CategoryTreeviewComponent } from './flashcards/components/category-treeview/category-treeview.component';
import { FlashcardComponent } from './flashcards/components/flashcard/flashcard.component';
import { FlatCategoriesComponent } from './flashcards/components/flat-categories/flat-categories.component';
import { FlashcardCollectionComponent } from './flashcards/components/flashcard-collection/flashcard-collection.component';

@NgModule({
  declarations: [
    AppComponent,
    FlashcardComponent,
    CategoryTreeviewComponent,
    FlatCategoriesComponent,
    FlashcardCollectionComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
  ],
  exports: [
    RouterModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
