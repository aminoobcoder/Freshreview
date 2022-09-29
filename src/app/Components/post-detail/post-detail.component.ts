import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HelperService } from 'src/app/Services/helper.service';
import { Post } from "src/app/Models/post.model";
import { HttpErrorResponse } from '@angular/common/http';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  postId: number = 0;
  post!: Post;
  comments: Comment[] = [];
  commentsdialog: boolean = false;

  constructor(private route: ActivatedRoute, 
    private helperService: HelperService, 
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.route.params.subscribe( x => {
      this.postId = x['id'];
    });
    this.helperService.getPostById(this.postId).subscribe( result => {
      this.post = result
    },(errorResponse: HttpErrorResponse) => {
      this.messageService.add({key: 'errorMessage', severity:'error', summary: 'Error', detail: errorResponse.error});
    });
  }

  getComments(id: number) {
    this.helperService.getCommentsById(id).subscribe( result => {
      console.log(result);
      this.commentsdialog = true;
      this.comments = result;
    },(errorResponse: HttpErrorResponse) => {
      this.messageService.add({key: 'errorMessage', severity:'error', summary: 'Error', detail: errorResponse.error});
    });
  }

}
