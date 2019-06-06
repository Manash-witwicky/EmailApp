import { Component, OnInit } from '@angular/core';
import { fade } from '../animation';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-starred',
  templateUrl: './starred.component.html',
  styleUrls: ['./starred.component.css'],
  animations: [
    fade
  ]
})
export class StarredComponent implements OnInit {

  private starredMails: any = [];

  constructor(private emailService: EmailService) { }

  ngOnInit() {
    this.starredMails = this.emailService.getStarredMail();
  }
}
