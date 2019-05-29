import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { fade } from '../animation';
import { Email } from '../email.model';
import { FetchEmail } from '../state/email.actions';
import { EmailModel } from '../state/email.models';
import { EmailState } from '../state/email.state';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css'],
  animations: [
    fade
  ]
})
export class InboxComponent implements OnInit {

  @Select(EmailState.getEmail)
  email$: Observable<EmailModel>;

  private _url = 'http://localhost:3000/emails';

  private emails: any = [];

  private selectedEmail: Email;

  private isChanged = false;

  private isRead = false;

  constructor(private _http: HttpClient, private router: Router, private store: Store) { }

  public getPost() {
    this.emails = this._http.get<Email[]>(this._url);
  }

  starred(email: Email) {
    this.isChanged = !this.isChanged;
    const id = email.id;
    console.log(id);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };

    const body = JSON.stringify({
      'starred': true
    });

    this._http.patch(`http://localhost:3000/emails/${id}`, body, httpOptions)
      .subscribe((data) => {
        console.log(data);
      });
  }

  deleteEmail(email: Email) {
    const id = email.id;
    this._http.delete(`http://localhost:3000/emails/${id}`)
      .subscribe((data) => {
        console.log('Deleted data: ' + data);
      });
    this.getPost();
    console.log('Deleted successfully!!!');
  }

  markAsRead(email) {
    this.isRead = !this.isRead;
    const id = email.id;
    console.log(id);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };

    const body = JSON.stringify({
      'read': true
    });

    this._http.patch(`http://localhost:3000/emails/${id}`, body, httpOptions)
      .subscribe((data) => {
        console.log(data);
      });
  }

  ngOnInit() {
    this.store.dispatch(new FetchEmail());
  }

}
