import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Email } from '../app/state/email.models';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private _url = 'http://localhost:3000/emails';

  public text: any;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(private _http: HttpClient) { }

  getEmail() {
    return this._http.get<Email[]>(this._url);
  }


  getStarredMail() {
    return this._http.get<Email[]>(this._url).pipe(
      map(mails => mails.filter(mail => mail.starred))
    );
  }

  saveData(email) {
    const data = {
      email: email,
    };
    this.text = Object.assign({}, data);
    return this.text.email;

  }

  addMail(email, subject, content) {

    const randomId = Math.floor((Math.random() * 1000) + 1);

    const body: Email = {
      'id': randomId,
      'email': email,
      'subject': subject,
      'body': content,
      'sent': true
    };

    return this._http.post(this._url, JSON.stringify(body), this.httpOptions);
  }

  starredMail(email: Email) {
    const id = email.id;
    const body = JSON.stringify({
      'starred': true
    });

    return this._http.patch(this._url + '/' + id, body, this.httpOptions)
      .subscribe((data) => {
        console.log(data);
      });
  }

  addMailState(payload: Email) {
    return this._http.post<Email>(this._url, payload);
  }
}

