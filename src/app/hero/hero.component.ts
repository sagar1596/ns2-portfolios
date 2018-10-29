import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  @Input() inputname: string;
  constructor() { }

  ngOnInit() {
  }

  getStyles(){
    return `url(${this.inputname})`;
  }

}
