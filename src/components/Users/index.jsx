import React from "react";
import { useQuery } from "react-query";

const Users = () => {
  const { isLoading, data } = useQuery(
    "getAllUsers",
    () =>
      fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
        res.json()
      ),
    { keepPreviousData: true, refetchOnWindowFocus: false }
  );

  // console.log(data, "posts");
  return (
    <div>
      <h1>Users</h1>
      {isLoading ? (
        "Loading ..."
      ) : (
        <div>
          {data.map(({ id, username, name }) => (
            <table key={id}>
              <td>
                {id}. {username} =
              </td>
              <td>{name}</td>
            </table>
          ))}
        </div>
      )}
    </div>
  );
};

export default Users;
