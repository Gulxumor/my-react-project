import React from "react";
import { useQueryClient } from "react-query";

const Posts = () => {
  const queryClient = useQueryClient();
  const posts = queryClient.getQueryData("getAllPosts");

  return (
    <div>
      <h1 style={{ margin: "0 700px" }}>Posts</h1>
      {posts.map(({ id, body, title }) => (
        <div key={id}>
          <p>=====================POSTS=====================</p>
          <p>
            {id} =====
            {body}
          </p>
          <p>{title}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
