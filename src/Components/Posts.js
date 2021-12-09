import React from "react";
import { connect } from "react-redux";
import Post from "./Post";

const Posts = ({ syncPosts }) => {
  if (!syncPosts.length) {
    return <p>Постов пока нет</p>;
  }
  return (
    <div>
      {syncPosts.map((post) => {
        return <Post key={post.id} post={post} />;
      })}
    </div>
  );
};


const mapStateToProps = (state) => {
  return {
    syncPosts: state.posts.posts
  };
};

export default connect(mapStateToProps, null)(Posts);
