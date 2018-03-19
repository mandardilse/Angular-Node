import { ActionReducerMap, MetaReducer, ActionReducer } from "@ngrx/store";
import { AppState } from "../state/AppState";
import { environment } from '../../../environments/environment';
import * as postReducer from './post.reducer';


export const reducers: ActionReducerMap<AppState> = {
    postState : postReducer.reducer
}

export function logger(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
    return function(state: AppState, action: any): AppState {
      console.log('state', state);
      console.log('action', action);
      return reducer(state, action);
    };
  }

export const metaReducers: MetaReducer<AppState>[] = !environment.production  ? [logger]  : [];