import { Injectable } from '@angular/core';

import { Post } from '../model/post';
import { Observable, of } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

    private postUrl='api/posts';

    constructor(
        private http: HttpClient
    ) { }

    getPosts(): Observable<Post[]> {
        return this.http.get<Post[]>(this.postUrl);
    }

    getPostById(id:number):Observable<Post>{
        const url = `${this.postUrl}/${id}`;
        return this.http.get<Post>(url);
    }

 
}
