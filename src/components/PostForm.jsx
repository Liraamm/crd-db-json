import React, { useState } from "react";

const PostForm = ({ createPost }) => {
  let [titleInputVal, setTitleInputVal] = useState("");
  let [bodyInputVal, setBodyInputVal] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!titleInputVal.trim() || !bodyInputVal.trim()) {
          return;
        }
        const newPost = {
          userId: Date.now(),
          id: Date.now(),
          title: titleInputVal,
          body: bodyInputVal,
        };
        createPost(newPost);

        setTitleInputVal = "";
        setBodyInputVal = "";
      }}
    >
      <input
        value={titleInputVal}
        onChange={(e) => {
          setTitleInputVal(e.target.value);
        }}
        type="text"
      />
      <input
        value={bodyInputVal}
        onChange={(e) => {
          setBodyInputVal(e.target.value);
        }}
        type="text"
      />
      <button>Add post</button>
    </form>
  );
};

export default PostForm;
