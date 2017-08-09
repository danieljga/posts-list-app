/**
 * Servicio que se encarga del manejo de los posts mediante la comunicación con un api externo
 */

import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import '../rxjs/index';
import {Post} from '../Clases/Post';

@Injectable()
export class PostsApiService{
    
    constructor(private http: Http){}

    getPosts(): Observable<Post[]>{
        return this.http.get("http://jsonplaceholder.typicode.com/posts").map(this.getDatos).catch(this.error);
    }

    private error(error: any){
        console.log(error);
        let msg = (error.message) ? error.message : 'Error desconocido';
        console.error(msg);
        return Observable.throw(msg);
    }

    private getDatos(data: Response){
        let datos = data.json();
        console.log(datos);
        return datos || [];
    }
}