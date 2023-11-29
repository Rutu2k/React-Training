import { useSelector } from "react-redux";
import { RootState } from "../store";

const Test: React.FC<any> = () => {
  const counter: any = useSelector((state: RootState) => state.user.counter);

  return <div style={{ backgroundColor: "red" }}>{counter}</div>;
};

export default Test;
