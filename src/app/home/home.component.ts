import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public intern: string = '../assets/images/intern.png';
  public company: string = '../assets/images/puzzle.png';
  
  constructor() { }

  ngOnInit() {
  }

}
