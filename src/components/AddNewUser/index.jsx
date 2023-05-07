import { useMutation } from "react-query";

const AddNewUser = () => {
  // yangi post qo'shish
  const newPOST = {
    id: 1111,
    username: "John",
    name: "Jackov",
  };
  const { mutate } = useMutation(() =>
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPOST),
    })
  );

  mutate("newUser", {
    onSuccess: (res) => {
      console.log(res);
    },
  });

  return <div>AddNewUser</div>;
};

export default AddNewUser;
