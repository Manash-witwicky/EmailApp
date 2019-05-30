import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Email } from '../email.model';

@Component({
  selector: 'app-sentitems',
  templateUrl: './sentitems.component.html',
  styleUrls: ['./sentitems.component.css']
})
export class SentitemsComponent implements OnInit {

  constructor(private _http: HttpClient) { }

  private _url = 'http://localhost:3000/emails';

  private sentItems: any = [];

  public getSentMails() {

  }

  ngOnInit() {
    this.sentItems = this._http.get<Email[]>(this._url);
  }

}
