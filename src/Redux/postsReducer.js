import { CREATE_POST, FETCH_POST } from "./types";

const initalState = {
  posts: [],
  fetchedPosts: [],
};

export const postsReducer = (state = initalState, action) => {
  switch (action.type) {
    case CREATE_POST:
      return { ...state, posts: state.posts.concat(action.payload) };
    //   return { ...state, posts: [...state.posts, action.payload]};
    case FETCH_POST:
      //return {...state, fetchedPosts: state.fetchedPosts.concat(action.payload)}
      return { ...state, fetchedPosts: action.payload };
    default:
      return state;
  }
};
