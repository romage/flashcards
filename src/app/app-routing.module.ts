import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlashcardComponent } from './flashcards/components/flashcard/flashcard.component';
import { FlashcardCollectionComponent } from './flashcards/components/flashcard-collection/flashcard-collection.component';


const routes: Routes = [
  { path: 'test',  loadChildren: './test/test.module#TestModule'},
  { path: 'setup', loadChildren: './setup/setup.module#SetupModule'},
  { path: 'flashcards', children: [
    { path: 'category/:category', component: FlashcardCollectionComponent },
    { path: '', redirectTo: 'category', pathMatch: 'full' }
  ] },
  { path: '', redirectTo: 'flashcards', pathMatch: 'full' }
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
