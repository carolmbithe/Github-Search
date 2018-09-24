import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { GithubComponent } from './github/github.component';
import { GithubsearchComponent } from './githubsearch/githubsearch.component';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpModule } from '@ngx-progressbar/http';
import { AboutComponent } from './about/about.component';
import { RouterModule, Routes } from '@angular/router';
// import { NotFoundComponent } from './not-found/not-found.component';
// import { HighlightDirective } from './highlight.directive';
import {RoutingModule} from './routing/routing.module'


// const routes:Routes=[
//   {path:"github",component:GithubComponent},
//   {path:"about",component:AboutComponent},
//   {path:"home",redirectTo:"/github",pathMatch:"full"},
//   {path:'**',component:NotFoundComponent}
// ]


@NgModule({
  declarations: [
    AppComponent,
    GithubComponent,
    GithubsearchComponent,
    AboutComponent,
    // NotFoundComponent,
    // HighlightDirective,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule,
    NgProgressModule.forRoot(),// normal progress bar
    NgProgressHttpModule, // progress bar to load http requests
    // RouterModule.forRoot(routes)


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
