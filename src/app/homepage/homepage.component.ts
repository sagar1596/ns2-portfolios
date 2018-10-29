import { Component, OnInit, Input, Output } from '@angular/core';

import { CARDS } from '../mock-cards';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  cards = CARDS;
  constructor() { }

  ngOnInit() {
  }

  getCards() {}

}
