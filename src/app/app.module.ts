import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FileStatusComponent } from './file-status/file-status.component';
import { FileApproveComponent } from './file-approve/file-approve.component';
import { FileDeleteComponent } from './file-delete/file-delete.component';
import { FormsModule } from '@angular/forms';
import { TabViewComponent } from './tab-view/tab-view.component';
import { TabviewApproveComponent } from './tabview-approve/tabview-approve.component';
import { TabviewDeleteComponent } from './tabview-delete/tabview-delete.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FileUnbundleComponent } from './file-unbundle/file-unbundle.component';
import { FileGettcnfromfileComponent } from './file-gettcnfromfile/file-gettcnfromfile.component';
import { FileGetfilefromtcnComponent } from './file-getfilefromtcn/file-getfilefromtcn.component';
import { TabviewGetfileComponent } from './tabview-getfile/tabview-getfile.component';
import { TabviewGettcnComponent } from './tabview-gettcn/tabview-gettcn.component';
import { FileStatuspieComponent } from './file-statuspie/file-statuspie.component';
import { TabviewNoresultsComponent } from './tabview-noresults/tabview-noresults.component';

@NgModule({
  declarations: [
    AppComponent,
    FileStatusComponent,
    FileApproveComponent,
    FileDeleteComponent,
    TabViewComponent,
    TabviewApproveComponent,
    TabviewDeleteComponent,
    FileUnbundleComponent,
    FileGettcnfromfileComponent,
    FileGetfilefromtcnComponent,
    TabviewGetfileComponent,
    TabviewGettcnComponent,
    FileStatuspieComponent,
    TabviewNoresultsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
