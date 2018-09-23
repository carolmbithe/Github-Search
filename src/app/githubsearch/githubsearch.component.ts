import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-githubsearch',
  templateUrl: './githubsearch.component.html',
  styleUrls: ['./githubsearch.component.css']
})
export class GithubsearchComponent implements OnInit {

link="https://api.giphy.com/v1/gifs/search?q=";
 key="&api_key=GmxQH7oMwWvakXa8MstlqvInM3EM3FMR";
 gifs=[];

  constructor(private http:Http) { }

  ngOnInit() {
  }

}
