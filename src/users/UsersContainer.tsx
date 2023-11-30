import axios from "axios";
import { useQuery } from "react-query";
import { Spinner } from "reactstrap";
import UsersComponent from "./UsersComponent";

const UsersContainer: React.FC = () => {
  const fetchUsers = async () => {
    const response = await axios.get("https://reqres.in/api/users");
    return response?.data?.data;
  };

  const { data, isLoading } = useQuery("userList", fetchUsers);

  return !isLoading ? <UsersComponent userList={data} /> : <Spinner />;
};

export default UsersContainer;
