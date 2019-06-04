import { Component, OnInit } from '@angular/core';
import { fade } from '../animation';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-sentitems',
  templateUrl: './sentitems.component.html',
  styleUrls: ['./sentitems.component.css'],
  animations: [
    fade
  ]
})
export class SentitemsComponent implements OnInit {

  constructor(private emailService: EmailService) { }

  private sentItems: any = [];

  ngOnInit() {
    this.sentItems = this.emailService.getEmail();
  }

}
