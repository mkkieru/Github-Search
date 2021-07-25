import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-service/user.service'
import {Repo} from '../repo'

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {
  repo: any = Repo;
  reposItems: any = [];
  reposName: string ='';

  constructor(private userService:UserService) {

  }

 
  findRepo() {
    this.userService.UpdateRepo(this.reposName);
    this.userService.searchrepos().subscribe(repo => {

    //  this.reposItems = String;
    this.reposItems = this.reposItems['items'];
     console.log(this.reposItems);
    })
  }

 ngOnInit() {
   this.findRepo()
 }

}
