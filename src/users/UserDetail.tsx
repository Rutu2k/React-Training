import { useLocation, useParams } from "react-router-dom";

const UserDetail: React.FC = () => {
  const params = useParams();
  const location = useLocation();

  console.log(params, location);

  return <>UserDetail</>;
};

export default UserDetail;
