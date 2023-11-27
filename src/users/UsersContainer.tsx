import { useContext, useReducer } from "react";
import { Context } from "../App";

import UsersComponent from "./UsersComponent";

const UsersContainer: React.FC = () => {
  const theme = useContext(Context);

  console.log(theme);

  const userData = [
    {
      id: 1,
      name: "kunal",
      age: 22,
      admin: true,
    },
    {
      id: 2,
      name: "rounak",
      age: 23,
      admin: false,
    },
    {
      id: 3,
      name: "utkarsh",
      age: 22,
      admin: false,
    },
  ];

  const reducerMethod = (users: any, action: any) => {
    switch (action.type) {
      case "deleteUser": {
        return users.filter((user: any) => user.id !== action.id);
      }
      default: {
        // Handle error here
      }
    }
  };

  const [users, dispatch] = useReducer(reducerMethod, userData);

  const handleDeleteUser = (userId: any) => {
    dispatch({
      type: "deleteUser",
      id: userId,
    });
  };
  return (
    <UsersComponent
      userList={users}
      handleDeleteUser={handleDeleteUser}
      theme={theme}
    />
  );
};

export default UsersContainer;
