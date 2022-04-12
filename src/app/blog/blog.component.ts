import { Component, OnInit } from '@angular/core';
import { Post } from '../model/post';
import { PostService } from '../services/post.service';

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

    posts: Post[] = [];
    item = 3;
    constructor(
        private postService: PostService
    ) { }

    ngOnInit(){
        return this.getPosts();
    }

    getPosts(): void {
        this.postService.getPosts().subscribe(posts => this.posts = posts);
    }

    selectedItemRow(item:number):void{
        this.item =item;
    }
}
