import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constant } from '../shared/constant';

@Injectable()
export class PostService {

  constructor(private http: HttpClient, @Inject(Constant) private constant) { }

  getAllPost(){
    return this.http.get(this.constant.Posts_Url)
  }

  getSinglePost(id:string){
    return this.http.get(this.constant.Posts_Url+'/'+id)
  }

  createPost(PostData:any){
    return this.http.post(this.constant.Posts_Url,PostData).subscribe(p=> p);
  }

  updatePost(PostData:any){
    return this.http.put(this.constant.Posts_Url+'/Update',PostData)
  }

}
