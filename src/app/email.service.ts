import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  addMail(email, subject, content) {

    const randomId = Math.floor((Math.random() * 1000) + 1);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };

    const body: Email = {
      'id': randomId,
      'email': email,
      'subject': subject,
      'body': content,
      'sent': true
    };

    return this._http.post(this._url, JSON.stringify(body), httpOptions)
      .subscribe(data => console.log(data));

    // return this._http.post<Email>(this._url, body);
  }

  starredMail(email: Email) {
    const id = email.id;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };

    const body = JSON.stringify({
      'starred': true
    });

    return this._http.patch(this._url + '/' + id, body, httpOptions)
      .subscribe((data) => {
        console.log(data);
      });
  }
}

