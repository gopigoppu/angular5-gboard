import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ApiService {

  readonly baseUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  getUsers() {
    const url = this.baseUrl + 'api/gusers';
    return this.http.get(url);
  }

}
