import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Subscription } from 'rxjs';
import { Email } from '../email.model';
import { ComposeEmail } from '../state/email.actions';

@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.css']
})
export class ComposeComponent implements OnInit {

  private _url = 'http://localhost:3000/emails';

  subscription: Subscription;

  email: any = '';

  randomIds = Math.floor((Math.random() * 1000) + 1);

  constructor(private _http: HttpClient, private store: Store) { }

  public sendEmail(email, subject, content) {

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

    this.subscription = this._http.post(this._url, JSON.stringify(body), httpOptions)
      .subscribe(data => console.log(data));

  }

  private composeMail(id, email, subject, body, sent) {
    this.store.dispatch(new ComposeEmail(
      {
        id: this.randomIds,
        email: email.value,
        subject: subject.value,
        body: body.value,
        sent: true
      }
    ));
  }

  ngOnInit() {

  }

}
