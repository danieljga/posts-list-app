/**
 * Componente para el manejo del detalle de un post
 */

import {Component, Input} from '@angular/core';
import {Http} from '@angular/http';
import {Post} from './Clases/Post';

@Component({
  moduleId: module.id,
  selector: 'post-detail',
  templateUrl: 'PostDetail.component.html'
})

export class PostDetailComponent{

    @Input() model: Post;
    @Input() bestPosts: Array<Post>;
    
    constructor(private http:Http){} 
}