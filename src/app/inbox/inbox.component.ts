import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Email } from '../email.model';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {

  private _url = 'http://localhost:3000/emails';

  private emails: any = [];

  private selectedEmail: Email;

  constructor(private _http: HttpClient) { }

  public getPost() {
    this.emails = this._http.get<Email[]>(this._url);
    console.log(this.emails);
  }

  onSelect(email: Email) {
    this.selectedEmail = email;
  }

  ngOnInit() {
    this.getPost();
  }

}
