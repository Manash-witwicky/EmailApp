import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Email } from './email.model';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private _url = 'http://localhost:3000/emails';

  constructor(private _http: HttpClient) { }

  getEmail() {
    return this._http.get<Email[]>(this._url);
  }
}
