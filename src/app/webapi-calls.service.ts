import { Injectable } from '@angular/core';
import { ajax } from 'rxjs/ajax';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WebapiCallsService {

  public getApprovables() {
    const response = ajax({
      url:environment.apigetApprovablesEndpoint,
      method: 'POST',
    });
    return response;
  }

  constructor() { }
  public getFileStatus(_key: string)
  {
    const response = ajax({
      url:environment.apiGetStatusEndpoint,
      method: 'POST',
      body: _key
    });
    return response;
  }
  public getTCN(_key: string)
  {
    const response = ajax({
      url:environment.apiGetTCNEndpoint,
      method: 'POST',
      body: _key
    });
    return response;
  }
  public getFile(_key: string)
  {
    const response = ajax({
      url:environment.apiGetFilesEndpoint,
      method: 'POST',
      body: _key
    });
    return response;
  }
  public getFileStatusByID(_key: string)
  {
    const response = ajax({
      url:environment.apiGetStatusByIDEndpoint,
      method: 'POST',
      body: _key
    });
    return response;
  }

  public getFileStatusPieGraph()
  {
    const response = ajax({
      url:environment.apiGetStatusPieEndpoint,
      method: 'POST',
    });
    return response;
  }

  public approveFile(_key: string)
  {
    const response = ajax({
      url:environment.apiApproveEndpoint,
      method: 'POST',
      body: _key
    });
    return response;
  }
  public deleteBulk(_key: string)
  {
    const response = ajax({
      url:environment.apiDeleteBulkEndpoint,
      method: 'POST',
      body: _key
    });
    return response;
  }
  public deleteSingle(_key: string)
  {
    console.log(_key);
    const response = ajax({
      url:environment.apiDeleteEndpoint + "?_fileID=" + _key,
      method: 'GET',
    });
    return response;
  }

}
