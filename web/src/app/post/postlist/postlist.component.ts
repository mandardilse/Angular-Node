import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Store } from '@ngrx/store';
import { PostState } from '../../store/state/AppState';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostlistComponent implements OnInit {
  $postList:any;
  constructor(private postService: PostService, private store: Store<PostState>) { }

  ngOnInit() {
    this.$postList = this.postService.getAllPost();
  }
}
