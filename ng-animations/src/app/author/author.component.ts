import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  //styleUrls: ['./author.component.css']
  styles: [`
    h1 {
      margin: 0;
      font-size: 12px;
      color: #42ad32;
    }
  `]
})
export class AuthorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
