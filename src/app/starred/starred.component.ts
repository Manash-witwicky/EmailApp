import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Email } from '../email.model';

@Component({
  selector: 'app-starred',
  templateUrl: './starred.component.html',
  styleUrls: ['./starred.component.css']
})
export class StarredComponent implements OnInit {

  private _url = 'http://localhost:3000/emails';

  constructor(private _http: HttpClient) { }

  private starredMails: any = [];

  public getStarredMails() {
    this._http.get<Email[]>(this._url)
      .subscribe((data) => {
        this.starredMails = data.filter((email) => {
          return email.starred === true;
        });
      });
  }

  ngOnInit() {
    this.getStarredMails();
  }

}
