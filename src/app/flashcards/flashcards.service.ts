import { Injectable } from '@angular/core';
import { Observable, pipe, of } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { Card } from './models/card';
import { HttpClient } from '@angular/common/http';
import { Category } from './models/category';
import { environment } from '../../environments/environment';
import { FlatCategory } from './models/flat-category';
import { Collection } from './models/collection';

@Injectable({
  providedIn: 'root'
})
export class FlashcardsService {
  baseurl = environment.api;
  constructor(private http: HttpClient) { }

  getCards(): Observable<Card[]> {
    const url = this.baseurl + '';
    return this.http.get<Card[]>(url).pipe(
      catchError(this.handleError('getCards', []))
    );
  }

  getCollection(id: string): Observable<Card[]> {
    const url = `${this.baseurl}/collections/${id}`;
    return this.http.get<any>(url).pipe(
      catchError(this.handleError('getCollection', []))
    ).pipe(map(s => {
        return <Card[]> s.cards;
    }));
  }

  getAllCollections(): Observable<Collection[]> {
    const url = `${this.baseurl}/collections`;
    return this.http.get<Collection[]>(url).pipe(
      catchError(this.handleError('getAllCollections', []))
    );
  }

  getCardsForCategory(category: string): Observable<Card[]> {
    const url = '';
    return this.http.get<Card[]>(url).pipe(
      catchError(this.handleError('getCardsForCategory', []))
    );
  }

  getCategories(): Observable<Category[]> {
    const url = this.baseurl + '/categories';
    return this.http.get<Category[]>(url).pipe(
      catchError(this.handleError('getCategories', []))
    );
  }

  getFlatCategories(): Observable<FlatCategory[]> {
    const url = this.baseurl + '/flat-categories';
    return this.http.get<FlatCategory[]>(url).pipe(
      catchError(this.handleError('getFlatCategories', []))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
