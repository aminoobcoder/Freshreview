import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/Models/post.model';
import { PostList } from 'src/app/Models/postlist.model' ;
import { Postcount } from 'src/app/Models/postcount.model';
import { HelperService } from 'src/app/Services/helper.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  postCounts: Postcount[] = [];
  posts: Post[] = [];
  userIdList: number[] = [];

  constructor(private helperService: HelperService, 
    private router: Router, 
    private messageService: MessageService) {}

  ngOnInit(): void {
    this.helperService.getPost().subscribe( result => {
      this.posts = result;
      this.getUserIdList();
    },(errorResponse: HttpErrorResponse) => {
      this.messageService.add({key: 'errorMessage', severity:'error', summary: 'Error', detail: errorResponse.error});
    });
  }

  getUserIdList() {
    this.posts.forEach( x => {
      if( !this.userIdList.includes(x.userId) ) {
        this.userIdList.push(x.userId);
      }
    });
    this.getPostList();
  }

  getPostList() {
    for(var i = 0; i < this.userIdList.length; i++) {
      this.postCounts.push({userId: this.userIdList[i], postList: []});
      this.posts.forEach( x => {
        if(x.userId == this.userIdList[i]) {
          this.postCounts[i].postList.push({ id: x.id, title: x.title, body: x.body });
        }
      });
    }
  }

  viewPost(id: number) {
    this.router.navigate(['/posts', id]);
  }

}
