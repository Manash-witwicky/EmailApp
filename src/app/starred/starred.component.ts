import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-starred',
  templateUrl: './starred.component.html',
  styleUrls: ['./starred.component.css']
})
export class StarredComponent implements OnInit {

  constructor(private _http: HttpClient, private emailService: EmailService) { }

  private starredMails: any = [];

  ngOnInit() {
    this.starredMails = this.emailService.getEmail();
  }
}



