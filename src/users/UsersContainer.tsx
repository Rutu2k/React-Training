import axios from "axios";
import { useEffect, useState } from "react";
import { UserListType } from "./type";
import UsersComponent from "./UsersComponent";

const UsersContainer: React.FC = () => {
  const [userList, setUserList] = useState<Array<UserListType>>([]);

  useEffect(() => {
    axios
      .get("https://reqres.in/api/users")
      .then((response) => setUserList(response?.data?.data))
      .catch((error) => console.log(error));
  }, []);

  console.log(userList);

  return <UsersComponent userList={userList} />;
};

export default UsersContainer;
