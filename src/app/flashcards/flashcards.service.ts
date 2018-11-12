import { Injectable } from '@angular/core';
import { Observable, pipe, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Card } from './models/card';
import { HttpClient } from '@angular/common/http';
import { nextContext } from '@angular/core/src/render3';
@Injectable({
  providedIn: 'root'
})
export class FlashcardsService {

  constructor(private http: HttpClient) { }

  getCards(): Observable<Card[]> {
    const url = '';
    return this.http.get<Card[]>(url).pipe(
      catchError(this.handleError('getCards', []))
    );
  }

  getCardsForCategory(category: string): Observable<Card[]> {
    const url = '';
    return this.http.get<Card[]>(url).pipe(
      catchError(this.handleError('getCardsForCategory', []))
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
