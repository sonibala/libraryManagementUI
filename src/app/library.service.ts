import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Library } from './library';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  private baseUrl = 'http://localhost:8080/libraries';
  constructor(private http: HttpClient) { }

  getBook(id:number): Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createBook(book: object): Observable<Object>{
    return this.http.post(`${this.baseUrl}`, book);
  }

  lendBook(id:number, value:any): Observable<Object>{
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteBook(id:number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getBookList():Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }
}
