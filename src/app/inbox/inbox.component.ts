import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { fade } from '../animation';
import { EmailService } from '../email.service';
import { DeleteMail, FetchEmail } from '../state/email.actions';
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

  // private _url = 'http://localhost:3000/emails';

  private emails: any = [];

  private isChanged = false;

  constructor(private _http: HttpClient, private store: Store, private emailService: EmailService) { }

  starred(email) {
    this.isChanged = !this.isChanged;
    this.emailService.starredMail(email);
  }

  // markAsRead(email) {
  //   this.isRead = !this.isRead;
  //   const id = email.id;
  //   console.log(id);
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //     })
  //   };

  //   const body = JSON.stringify({
  //     'read': true
  //   });

  //   this._http.patch(`http://localhost:3000/emails/${id}`, body, httpOptions)
  //     .subscribe((data) => {
  //       console.log(data);
  //     });
  // }

  deleteEmail(id) {
    this.store.dispatch(new DeleteMail(id));
  }

  ngOnInit() {
    this.store.dispatch(new FetchEmail());
  }

}
