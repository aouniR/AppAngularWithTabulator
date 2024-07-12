import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class FetchDataService {
  private apiUrl = 'https://retoolapi.dev/HYd96h/data/';
  constructor(private http: HttpClient) {}

  getData(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(response => response || []),
      catchError(error => {
        console.error('Error fetching data:', error);
        return of([]);
      })
    );
  }
}
