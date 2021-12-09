import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../Redux/actions";
import Loader from "./Loader";
import Post from "./Post";

const FetchedPosts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.fetchedPosts);
  const loadingState = useSelector((state) => state.app.loading);

  if (loadingState) return <Loader />

  if (!posts.length) {
    return (
      <button
        onClick={() => dispatch(fetchPosts())}
        className="btn btn-primary"
      >
        Загрузить
      </button>
    );
  }

  return (
    <div>
      {posts.map((post, index) => {
        return <Post key={index} post={post} />;
      })}
    </div>
  );
};

export default FetchedPosts;
