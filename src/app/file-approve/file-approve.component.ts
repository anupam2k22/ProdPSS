import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedApprovalDataService } from '../shared-approval-data.service';
import { WebapiCallsService } from '../webapi-calls.service';

@Component({
  selector: 'app-file-approve',
  templateUrl: './file-approve.component.html',
  styleUrls: ['./file-approve.component.css']
})
export class FileApproveComponent implements OnInit {
_flag: boolean = false;
_res: any;
_response: any;
_num : number = 0;
  constructor(private _data: WebapiCallsService, private router: Router, private _sharedData: SharedApprovalDataService) { }

  ngOnInit(): void {
    this._data.getApprovables().subscribe(
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
              this._sharedData.storeApprovalData(this._response);
              this.router.navigate(['/', 'showFilestoApprove']);
            }
            else
            {
              this._flag = false;
              this.router.navigate(['/', 'noFilesToApprove']);
            }  
          }
        }
      }
    )  
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
