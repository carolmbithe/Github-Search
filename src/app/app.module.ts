import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { GithubComponent } from './github/github.component';
import { GithubsearchComponent } from './githubsearch/githubsearch.component';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpModule } from '@ngx-progressbar/http';

@NgModule({
  declarations: [
    AppComponent,
    GithubComponent,
    GithubsearchComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgProgressModule.forRoot(),// normal progress bar
    NgProgressHttpModule, // progress bar to load http requests

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
