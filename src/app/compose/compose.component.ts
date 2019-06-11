import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { EmailService } from '../email.service';
import { AddEmail } from '../state/email.actions';


@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.css']
})
export class ComposeComponent implements OnInit {

  email: any = '';

  storageData: any = '';

  constructor(private emailService: EmailService, private _store: Store) { }

  public sendEmail(email, subject, content) {
    this._store.dispatch(new AddEmail(email, subject, content));
    // this.emailService.addMail(email, subject, content);
  }

  saveData(email) {
    this.storageData = this.emailService.saveData(email);
    console.log(this.storageData);
  }

  ngOnInit() {
    this.storageData = this.emailService.text.email;
  }

}
