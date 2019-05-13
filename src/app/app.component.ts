import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private _url = 'http://localhost:3000/posts';

  private posts: any = [];

  constructor(private _http: HttpClient) { }

  public getPost() {
    // this._http.get(this._url)
    //   .subscribe((post) => {
    //     this.posts = post;
    //     console.log(this.posts);
    //   });
    this.posts = this._http.get(this._url);
    console.log(this.posts);

  }

  ngOnInit() {
    this.getPost();
  }
}
