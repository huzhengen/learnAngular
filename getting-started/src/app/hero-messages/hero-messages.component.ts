import { Component, OnInit } from '@angular/core';
import { HeroMessageService } from '../hero-message.service';

@Component({
  selector: 'app-hero-messages',
  templateUrl: './hero-messages.component.html',
  styleUrls: ['./hero-messages.component.css']
})
export class HeroMessagesComponent implements OnInit {

  constructor(public heroMessageService: HeroMessageService ) { }

  ngOnInit() {
  }

}
