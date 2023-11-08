import { Link, useNavigate } from "react-router-dom";
import {
  Card,
  CardSubtitle,
  CardTitle,
  List,
  Row,
  Col,
  Button,
} from "reactstrap";
import { IUserComponent } from "./type";

const UsersComponent: React.FC<IUserComponent> = ({ userList }) => {
  const navigate = useNavigate();

  const handleOnButtonClick = () => {
    navigate("/test1");
  };

  return (
    <>
      {userList.map((ele) => (
        <List key={ele.id}>
          <Row>
            <Col sm={3}>
              <Card>
                <img
                  src={ele.avatar}
                  alt="Avatar"
                  height={200}
                  width={200}
                ></img>
                <CardTitle>
                  {ele.first_name} {ele.last_name}
                </CardTitle>
                <CardSubtitle> Email : {ele.email}</CardSubtitle>
                <Link to={"/test1"}>Dummy</Link>
                <Button onClick={handleOnButtonClick}>Navigate</Button>
              </Card>
            </Col>
          </Row>
        </List>
      ))}
    </>
  );
};

export default UsersComponent;
