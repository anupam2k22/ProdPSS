import { Component, Input, OnInit } from '@angular/core';
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
  selector: 'app-tabview-delete',
  templateUrl: './tabview-delete.component.html',
  styleUrls: ['./tabview-delete.component.css'],
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
export class TabviewDeleteComponent implements OnInit {
  @Input() _responsefromApp: any;
  _actualResonse:any[] = [];
  _flag: boolean = false;
  _res:any;
  _response:any;

  constructor(private _data:WebapiCallsService) { }

  ngOnInit(): void {
    console.log(this._responsefromApp);
    this._flag = true;
  }
  fileSubmit(fileName: any)
  {
    //alert("Received "+ fileName);
    if (confirm('Are you sure you want to Delete File ID ' + fileName + ' ?')) {     
      this._data.deleteSingle(fileName).subscribe(
        res => {
          console.log(res.response);
          if(typeof (res.response === 'string')){
            this._res = res.response;
            this._response = JSON.parse(this._res);
            if(this._response.length == 0)
            {
              alert("Deleted "+ fileName);
              this._flag = false;          
            }
            else
            {
              //this._flag = false;
              alert(fileName + " could not be deleted! Please try again.");
            }
          }
        }
      )
  } else {
    //alert("Ignored "+ fileName); 
    this._flag = false;
  }
  }

}
