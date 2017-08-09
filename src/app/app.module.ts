import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {PostDetailComponent} from './PostDetail.component';

import {PostsApiService} from './Servicios/PostsApi.service';

@NgModule({
  declarations: [
    AppComponent,
    PostDetailComponent
  ],
  imports: [
    BrowserModule,
    Ng2Bs3ModalModule,
    HttpModule
  ],
  providers: [
    PostsApiService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
