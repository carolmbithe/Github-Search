import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubComponent } from '../github/github.component';
import {RouterModule,Routes} from '@angular/router'
import { AboutComponent } from '../about/about.component';
import { NotFoundComponent } from '../not-found/not-found.component';

const routes:Routes=[
  {path:"github",component:GithubComponent},
  {path:"about",component:AboutComponent},
  {path:"home",redirectTo:"/github",pathMatch:"full"},
  {path:'**',component:NotFoundComponent}
]

@NgModule({
  imports: [
    CommonModule,
    AboutComponent,
    NotFoundComponent,
  ],
  exports:[RouterModule],
  declarations: []
})
export class RoutingModule { }
