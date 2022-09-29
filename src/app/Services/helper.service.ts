import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../Models/post.model';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(private httpClient: HttpClient) { }

  getPost(): Observable<Post[]> {
    return this.httpClient.get<Post[]>("https://jsonplaceholder.typicode.com/posts");
  }

  getPostById(id: number): Observable<Post> {
    return this.httpClient.get<Post>("https://jsonplaceholder.typicode.com/posts/" + id);
  }

  getCommentsById(id: number): Observable<Comment[]> {
    return this.httpClient.get<Comment[]>("https://jsonplaceholder.typicode.com/posts/" + id + "/comments");
  }
}
