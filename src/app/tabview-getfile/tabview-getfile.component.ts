import { Component, Input, OnInit } from '@angular/core';
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
import { WebapiCallsService } from '../webapi-calls.service';


@Component({
  selector: 'app-tabview-getfile',
  templateUrl: './tabview-getfile.component.html',
  styleUrls: ['./tabview-getfile.component.css'],
  animations: [
    trigger('fade', [      
      transition('void => *', [
        style({opacity: 0}),
        animate(1000, style({opacity: 1}))
      ]),
      transition('* => void', [
        animate(1000, style({opacity: 0}))
      ])
    ])
  ]
})
export class TabviewGetfileComponent implements OnInit {

  constructor(private _data: WebapiCallsService) { }
  @Input() _responsefromApp: any;
  @Input() _TCN: any;
  page: number = 1;
  pageSize: number = 10;
  _actualResonse:any[] = [];
  FILTER_PAG_REGEX: any = /[^0-9]/g;
  _flag: boolean = true;
  _res:any;
  _response:any;

  ngOnInit(): void {
    this._actualResonse=this._responsefromApp;
    this._flag = true;
  }
  selectPage(page: string) {
    this.page = parseInt(page, 10) || 1;
  }

  formatInput(input: HTMLInputElement) {
    input.value = input.value.replace(this.FILTER_PAG_REGEX, '');
  }

  UnbundleFile()
  {
    //alert("Received "+ fileName);
    if (confirm('Are you sure you want to Unbundle ' + this._TCN + ' ?')) {
      if(this._TCN!="")
      {
        this._data.deleteBulk(this._TCN).subscribe(
          res => {
            console.log(res.response);
            if(typeof (res.response === 'string')){
              this._res = res.response;
              this._response = JSON.parse(this._res);
              if(this._response.length == 0)
              {
                alert("Unbundled "+ this._TCN);
                this._flag = false;          
              }
              else
              {
                //this._flag = false;
                alert(this._TCN + " could not be unbundled! Please try again.");
              }
            }
          }
        )  
      }
      else{
        alert("Filename cannot be empty");
      }
  } else {
  }
  }
}
