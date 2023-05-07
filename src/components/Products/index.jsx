import React from "react";
import { useQuery } from "react-query";

const Products = () => {
  const { isLoading, data } = useQuery(
    "getAllPosts",
    () =>
      fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
        res.json()
      ),
    { keepPreviousData: true, refetchOnWindowFocus: false }
  );

  //   console.log(posts, "posts");
  return (
    <div>
      <h1>Products</h1>
      {isLoading ? (
        "Loading ..."
      ) : (
        <div>
          {data.map(({ id, title, body }) => (
            <div key={id}>
              <div>
                {id}==={title}
              </div>
              <div>{body}</div>
              <p>============================</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
