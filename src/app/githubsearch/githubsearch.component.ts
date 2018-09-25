import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http'
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-githubsearch',
  templateUrl: './githubsearch.component.html',
  styleUrls: ['./githubsearch.component.css']
})
export class GithubsearchComponent implements OnInit {

  link='https://api.github.com/users/'
  access="?access_token=b59fabe37ecb2e26f1de386caf86258a96fd57a4"
  users=[];



  constructor(private http: Http) {

    this.http=http;
  

   }
   doSearch(search: HTMLInputElement)  {
    let fullLink = this.link + search.value ;
    this.http.get(fullLink).subscribe((Response) =>{
      this.users = Response.json().data;
    })
  }

  ngOnInit() {
  }

}
