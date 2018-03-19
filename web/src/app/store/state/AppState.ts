import { Post } from "../../models/post";

export interface AppState {
    postState: PostState
}

export interface PostState{
    posts: Post[]
}