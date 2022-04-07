import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileApproveComponent } from './file-approve/file-approve.component';
import { FileDeleteComponent } from './file-delete/file-delete.component';
import { FileGetfilefromtcnComponent } from './file-getfilefromtcn/file-getfilefromtcn.component';
import { FileGettcnfromfileComponent } from './file-gettcnfromfile/file-gettcnfromfile.component';
import { FileStatusComponent } from './file-status/file-status.component';
import { FileStatuspieComponent } from './file-statuspie/file-statuspie.component';
import { TabviewApproveComponent } from './tabview-approve/tabview-approve.component';
import { TabviewNoresultsComponent } from './tabview-noresults/tabview-noresults.component';

const routes: Routes = [
  { path: '', component: FileStatuspieComponent },
  { path: 'Home', component: FileStatuspieComponent },
  { path: 'getFileData', component: FileStatusComponent },
  { path: 'approveFileData', component: FileApproveComponent },
  { path: 'deleteFileData', component: FileDeleteComponent },
  { path: 'getTCNFromFile', component: FileGettcnfromfileComponent },
  { path: 'noFilesToApprove', component: TabviewNoresultsComponent },
  { path: 'showFilestoApprove', component: TabviewApproveComponent },
  { path: 'getFileFromTCN', component: FileGetfilefromtcnComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
