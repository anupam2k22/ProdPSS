import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedApprovalDataService {
_approvalData: any;
  constructor() { }
  public storeApprovalData(_data:any)
  {
    this._approvalData = _data;
  }
  public getApprovalData()
  {
    return this._approvalData;
  }
}
