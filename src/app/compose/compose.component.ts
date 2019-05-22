import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Email } from '../email.model';

@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.css']
})
export class ComposeComponent implements OnInit {

  private _url = 'http://localhost:3000/emails';

  subscription: Subscription;

  email: any = '';

  constructor(private _http: HttpClient) { }

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

  ngOnInit() {

  }

}
