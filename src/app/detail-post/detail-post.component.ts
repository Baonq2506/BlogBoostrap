import { Post } from './../model/post';
import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {PostService } from '../services/post.service';

@Component({
  selector: 'app-detail-post',
  templateUrl: './detail-post.component.html',
  styleUrls: ['./detail-post.component.css']
})
export class DetailPostComponent implements OnInit {

    @Input() post?:Post;

    constructor(
            private route: ActivatedRoute,
            private postService: PostService,
            private location: Location,
    ) { }

    ngOnInit(): void {
        this.getPostById();
    }

    getPostById(): void {
        const id =Number( this.route.snapshot.paramMap.get('id'));
        this.postService.getPostById(id).subscribe(post => this.post = post);
    }

    goBack(): void {
        this.location.back();
    }

}
