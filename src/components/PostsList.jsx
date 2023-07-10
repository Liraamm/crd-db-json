import React from "react";

const PostsList = ({ posts, deletePosts }) => {
  return (
    <div>
      <h1>Posts</h1>
      <div>
        {posts.map((item) => {
          return (
            <div key={item.id}>
              <h2>{item.title}</h2>
              <p>{item.body}</p>
              <button
                onClick={() => {
                  deletePosts(item.id);
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PostsList;
