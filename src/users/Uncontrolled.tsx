import { useRef } from "react";

const Uncontrolled: React.FC = () => {
  const emailRef: any = useRef();
  const passwordRef: any = useRef();

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    const email = emailRef?.current.value;
    const password = passwordRef?.current.value;

    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={emailRef} placeholder="Email" />
      <input ref={passwordRef} placeholder="Password" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Uncontrolled;
