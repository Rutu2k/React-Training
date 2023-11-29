import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { increment } from "../userSlice";

import UsersComponent from "./UsersComponent";

const UsersContainer: React.FC = () => {
  const [userList, setUserList] = useState<Array<any>>([]);
  const counter: any = useSelector((state: RootState) => state.user.counter);

  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("https://reqres.in/api/users")
      .then((response) => setUserList(response?.data?.data))
      .catch((error) => console.log(error));
  }, []);

  const handleOnButtonClick = () => {
    dispatch(increment());
  };

  console.log("here");

  return (
    <UsersComponent
      userList={userList}
      counter={counter}
      handleOnButtonClick={handleOnButtonClick}
    />
  );
};

export default UsersContainer;
