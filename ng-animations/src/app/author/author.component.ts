import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styles: [`
    h1 {
      margin: 0;
      font-size: 12px;
      /*color: #36ab22;*/
    }
  `],
  encapsulation: ViewEncapsulation.Emulated
})
export class AuthorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
