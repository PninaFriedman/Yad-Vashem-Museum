import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HoursService {

  constructor(private http: HttpClient) {
  }

  getData() {
    return this.http.get('https://localhost:44397/api/stock_cards');
  }
}
