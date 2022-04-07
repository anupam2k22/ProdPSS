import { Component, OnInit } from '@angular/core';
import { WebapiCallsService } from '../webapi-calls.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-file-delete',
  templateUrl: './file-delete.component.html',
  styleUrls: ['./file-delete.component.css'],
  animations: [
    trigger('fade', [      
      transition('void => *', [
        style({opacity: 0}),
        animate(1000, style({opacity: 1}))
      ])
    ])
  ]
})
export class FileDeleteComponent implements OnInit {
  _flag: boolean = false;
  _res: any;
  _response: any;
  _num : number = 0;
    constructor(private _data: WebapiCallsService) { }

  ngOnInit(): void {
  }
  fileSubmit(result: { fileID: string; })
  {
    this._flag = false;
    this._num = parseInt(result.fileID);
    console.log(this._num);
    if(result.fileID!="")
    {
      if(!isNaN(this._num))
      {
        this._data.getFileStatusByID(result.fileID).subscribe(
          res => {
            console.log(res.response);
            if(typeof (res.response === 'string')){
              this._res = res.response;
              if(res.response != "")
              {
                this._response = JSON.parse(this._res); 
                if(this._response.length != 0)
                {
                  this._flag = true;
                  console.log(this._response);
                }
                else
                {
                  this._flag = false;
                  alert(result.fileID + " does not exist!");
                }  
              }
              else
              {
                alert("Invalid Format entered. Only Numeric values accepted");
              }
            }
          }
        )  
  
      }
      else{
        alert("Invalid Format entered. Only Numeric values accepted");
      }  
  
    }
    else{
      alert("FileID cannot be empty");
    }

  }
}
