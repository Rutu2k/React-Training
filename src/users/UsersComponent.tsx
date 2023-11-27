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

const UsersComponent: React.FC<any> = ({
  userList,
  handleDeleteUser,
  theme,
}) => {
  return (
    <div>
      {userList.map((ele: any) => (
        <List key={ele.id}>
          <Row className={theme === "dark" ? "bg-dark" : ""}>
            <Col sm={3}>
              <Card>
                <CardTitle>
                  {ele.id} {ele.name}
                </CardTitle>
                <CardSubtitle> Age : {ele.age}</CardSubtitle>
                <Button onClick={() => handleDeleteUser(ele.id)}>Delete</Button>
              </Card>
            </Col>
          </Row>
        </List>
      ))}
    </div>
  );
};

export default UsersComponent;
