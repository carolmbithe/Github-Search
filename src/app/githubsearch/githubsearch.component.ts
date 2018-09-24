import { Component, OnInit } from '@angular/core';
import { Response, Http } from '@angular/http';



@Component({
  selector: 'app-githubsearch',
  templateUrl: './githubsearch.component.html',
  styleUrls: ['./githubsearch.component.css']
})
export class GithubsearchComponent implements OnInit {

  link = 'https://api.github.com/users/'
  access = "?access_token=b59fabe37ecb2e26f1de386caf86258a96fd57a4"
  users = [];



  constructor(private http: Http) {
    this.http=http;
  }

    searchUsers(search: HTMLInputElement) {
      let fullLink = this.link + search.value;
      this.http.get(fullLink).subscribe((res: Response) => {
        this.users = res.json();
  
      })
  

   
   
  }

  ngOnInit() {
  }

}
