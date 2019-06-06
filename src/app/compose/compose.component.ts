import { Component, OnInit } from '@angular/core';
import { EmailService } from '../email.service';


@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.css']
})
export class ComposeComponent implements OnInit {

  email: any = '';

  storageEmail: any = '';

  constructor(private emailService: EmailService) { }

  public sendEmail(email, subject, content) {
    this.emailService.addMail(email, subject, content);
  }

  storage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getStorage() {
    this.storageEmail = JSON.parse(localStorage.getItem('Email'));
    return this.storageEmail == null ? '' : this.storageEmail;
  }

  ngOnInit() {
    this.getStorage();
  }

}

// private composeMail(id, email, subject, body, sent) {
  //   this.store.dispatch(new ComposeEmail(
  //     {
  //       id: this.randomIds,
  //       email: email.value,
  //       subject: subject.value,
  //       body: body.value,
  //       sent: true
  //     }
  //   ));
  // }
