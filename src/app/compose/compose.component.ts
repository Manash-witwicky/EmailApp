import { Component, OnInit } from '@angular/core';
import { EmailService } from '../email.service';


@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.css']
})
export class ComposeComponent implements OnInit {

  email: any = '';

  storageData: any = '';

  constructor(private emailService: EmailService) { }

  public sendEmail(email, subject, content) {
    this.emailService.addMail(email, subject, content);
  }

  saveData(email) {
    this.storageData = this.emailService.saveData(email);
    console.log(this.storageData);
  }

  ngOnInit() {
    this.storageData = this.emailService.text.email;
  }

}
