import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-create-update-post',
  templateUrl: './create-update-post.component.html',
  styleUrls: ['./create-update-post.component.css']
})
export class CreateUpdatePostComponent implements OnInit {
  postDetails = {}
  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  onSave(){
    console.log(this.postDetails);
    this.postService.createPost(this.postDetails);
  }
}
