/**
 * Componente para el manejo de la lista de posts
 */

import { Component, OnInit, ViewChild } from '@angular/core';
import {Post} from './Clases/Post';
import {PostsApiService} from './Servicios/PostsApi.service';
import {ModalComponent} from 'ng2-bs3-modal/ng2-bs3-modal'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  posts: Array<Post> = [];
  originalPosts: Array<Post> = [];
  bestPosts: Array<Post> = [];
  post: Post = new Post(0,0,'','');
  @ViewChild('postModal')
  postModal: ModalComponent;
  showEmptyMessage = false;
  
  constructor(private servicio: PostsApiService) {}

  ngOnInit() {
      this.servicio.getPosts().subscribe(data => {
        this.posts = data;
        this.originalPosts = data;
      });
  }

  viewPost(post){
    this.post = post;
    this.postModal.open();
    this.bestPosts = this.posts.slice(0,5);
  }

  filterPosts(textSearch:string){
    if(textSearch){
      this.posts = this.originalPosts.filter((post: Post) => post.title.indexOf(textSearch) >= 0);
    }else{
      this.posts = this.originalPosts;
    }

    if(this.posts.length == 0){
      this.showEmptyMessage = true;
    }else{
      this.showEmptyMessage = false;
    }
  }
}