import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { Email } from './email.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private _url = 'http://localhost:3000/emails';

  private emails: any = [];

  private selectedEmail: Email;

  constructor(private _http: HttpClient, private renderer: Renderer2) { }

  public getPost() {
    this.emails = this._http.get<Email[]>(this._url);
    console.log(this.emails);
  }

  onSelect(email: Email, event) {
    this.selectedEmail = email;
    console.log(event.target);
    // const div = this.renderer.createElement('div');
    const text = this.renderer.createText(this.selectedEmail.body);
    // this.renderer.appendChild(div, text);
    this.renderer.appendChild(event.target, text);
    console.log(this.selectedEmail);

  }

  ngOnInit() {
    this.getPost();
  }


}
