import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Email } from '../app/state/email.models';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private _url = 'http://localhost:3000/emails';

  constructor(private _http: HttpClient) { }

  getEmail() {
    return this._http.get<Email[]>(this._url);
  }

  composeMail(body) {
    return this._http.post<Email>(this._url, body);
  }

  // deleteMail(id) {
  //   return this._http.delete(`http://localhost:3000/emails/${id}`);
  // }
}
