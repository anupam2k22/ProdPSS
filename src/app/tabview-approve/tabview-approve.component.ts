import { Component, OnInit, Input } from '@angular/core';
import { NgbPaginationConfig} from '@ng-bootstrap/ng-bootstrap';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { Router } from '@angular/router';
import { SharedApprovalDataService } from '../shared-approval-data.service';
import { FormControl } from '@angular/forms';
import { WebapiCallsService } from '../webapi-calls.service';

@Component({
  selector: 'app-tabview-approve',
  templateUrl: './tabview-approve.component.html',
  styleUrls: ['./tabview-approve.component.css'],
  animations: [
    trigger('fade', [      
      transition('void => *', [
        style({opacity: 0}),
        animate(1000, style({opacity: 1}))
      ]),
    ])
  ]

})
export class TabviewApproveComponent implements OnInit {
  _filesforApproval: any;
  _actualResonse:any[] = [];
  _flag: boolean = false;
  _checked:boolean = true;
  FILTER_PAG_REGEX: any = /[^0-9]/g;
  page: number = 1;
  pageSize: number = 10;
  _idsforApproval:any[] = [];
  _idsforApprovalreadonly:string = "";
  _idsforApprovalbackend:string = "";
  _res: any;
  constructor(private router: Router, private _sharedData:SharedApprovalDataService,private _data:WebapiCallsService) { 

  }

  ngOnInit(): void {
    this._actualResonse = this._sharedData._approvalData;
    console.log(this._sharedData);
    this._flag = true;
  }

  selectPage(page: string) {
    this.page = parseInt(page, 10) || 1;
  }

  formatInput(input: HTMLInputElement) {
    input.value = input.value.replace(this.FILTER_PAG_REGEX, '');
  }


  onNativeChange(e:any) { // here e is a native event
    if(e.target.checked){
      // do something here
      this._checked = true;
      this._idsforApproval.push(e.target.value);
      //alert('Checked ' + this._checked);
    }
    else
    {
      this._checked = false;
      this._idsforApproval.pop();
      //alert('Checked ' + this._checked);
    }
  }

  fileApprove()
  {
    //alert("Received "+ fileName);
    if(this._idsforApproval.length!=0)
    {
      for (let i = 0; i < this._idsforApproval.length; i++) {
        console.log (this._idsforApproval[i]);
        this._idsforApprovalreadonly = this._idsforApprovalreadonly + this._idsforApproval[i] + '\n';
        this._idsforApprovalbackend = this._idsforApprovalbackend + this._idsforApproval[i] + ',';
      }
      if (confirm('Are you sure you want to Approve the below File IDs?\n'+ this._idsforApprovalreadonly))
      {
        this._data.approveFile(this._idsforApprovalbackend).subscribe(
          res => {
            console.log(res.response);
            if(typeof (res.response === 'boolean')){
              this._res = res.response;
              if(this._res)
              {
                alert("Approved!");
                this._flag = false;
                this.router.navigate(['/', 'approveFileData'])
              }
              else
              {
                //this._flag = false;
                alert("Could not be Approved! Please try again.");
                this._flag = false;
                this.router.navigate(['/', 'approveFileData'])      
              }
            }
          }
        )  
      }
      else{
        this._idsforApproval = [];
        this._idsforApprovalreadonly = "";
        this._idsforApprovalbackend = "";
        console.log(this._idsforApproval);
        this.router.navigate(['/', 'approveFileData']);
      }
    }
    else{
      alert("Please select at least 1 file.");
    }
  }
}
