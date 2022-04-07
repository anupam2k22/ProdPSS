import { Component, OnInit, Input } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgbPaginationConfig} from '@ng-bootstrap/ng-bootstrap';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-tabview-gettcn',
  templateUrl: './tabview-gettcn.component.html',
  styleUrls: ['./tabview-gettcn.component.css'],
  animations: [
    trigger('fade', [      
      transition('void => *', [
        style({opacity: 0}),
        animate(1000, style({opacity: 1}))
      ])
    ])
  ]
})
export class TabviewGettcnComponent implements OnInit {

  constructor() { }
@Input() _responsefromApp: any;
page: number = 1;
pageSize: number = 10;
_actualResonse:any[] = [];
FILTER_PAG_REGEX: any = /[^0-9]/g;
  ngOnInit(): void {
    this._actualResonse=this._responsefromApp;
  }
  selectPage(page: string) {
    this.page = parseInt(page, 10) || 1;
  }

  formatInput(input: HTMLInputElement) {
    input.value = input.value.replace(this.FILTER_PAG_REGEX, '');
  }


}
