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
  selector: 'app-file-gettcnfromfile',
  templateUrl: './file-gettcnfromfile.component.html',
  styleUrls: ['./file-gettcnfromfile.component.css'],
  animations: [
    trigger('fade', [      
      transition('void => *', [
        style({opacity: 0}),
        animate(1000, style({opacity: 1}))
      ])
    ])
  ]

})
export class FileGettcnfromfileComponent implements OnInit {
  _flag: boolean = false;
  _res:any;
  _response:any;
  
  constructor(private _data: WebapiCallsService) { }

  ngOnInit(): void {
  }
  fileSubmit(result: { fileName: string; })
  {
    this._flag = false;
    if(result.fileName!="")
    {
      this._data.getTCN(result.fileName).subscribe(
        res => {
          console.log(res.response);
          if(typeof (res.response === 'string')){
            this._res = res.response;
            this._response = JSON.parse(this._res);
            if(this._response.length != 0)
            {
              this._flag = true;
              console.log(this._response);
            }
            else
            {
              this._flag = false;
              alert(result.fileName + " is not a valid file name for finding a TCN!");
            }
          }
        }
      )  
    }
    else{
      alert("Filename cannot be empty");
    }
  }

}
