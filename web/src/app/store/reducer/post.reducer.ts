import { PostState } from "../state/AppState";

export const initialState: PostState = {
    posts: []
}

export function reducer(state = initialState, action) : PostState {
    switch (action.type) {
        case '':
            return {posts: state.posts}    
        default:
            break;
    }
}