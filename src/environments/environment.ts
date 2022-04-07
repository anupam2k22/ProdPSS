// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiGetStatusEndpoint: 'http://localhost:1471/api/Status/',
  apiGetFilesEndpoint: 'http://localhost:1471/api/GetFiles/',
  apiGetTCNEndpoint: 'http://localhost:1471/api/GetTcn/',
  apiGetStatusPieEndpoint: 'http://localhost:1471/api/StatusPie/',
  apiGetStatusByIDEndpoint: 'http://localhost:1471/api/StatusByID/',
  apiApproveEndpoint: 'http://localhost:1471/api/Approve/',
  apiDeleteEndpoint: 'http://localhost:1471/api/Delete',
  apiDeleteBulkEndpoint: 'http://localhost:1471/api/BulkDelete/',
  apigetApprovablesEndpoint: 'http://localhost:1471/api/getApprovables/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
