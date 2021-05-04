import { useState } from "react";
import Button from "src/Component/Button/button.component";
import Input from "src/Component/Input/Input.component";
import axios from "axios";
//STYLES

const SignUp = () => {
  const [inputState, setInputState] = useState([]);
  const handleInput = (event) => {
    const { value, name } = event.target;
    setInputState({ ...inputState, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await axios.post("auth/signup", inputState);
  
    console.log(result);
  };
  return (

    
      <form onSubmit={handleSubmit}>
      <h2>I do not have a account</h2>
      <p> Sign up with your email and password</p>
        <Input
          name="name"
          type="text"
          placeholder="Display Name"
          onChange={handleInput}
          value={inputState.name}
        />
        <Input
          name="email"
          type="text"
          placeholder="Email"
          required
          onChange={handleInput}
          value={inputState.email}
        />
        <Input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleInput}
          value={inputState.password}
        />
        <Input
          name="passwordConfirm"
          type="password"
          placeholder="Confirm Password"
          onChange={handleInput}
          value={inputState.passwordConfirm}
        />
        <Button type="submit"> Sign Up</Button>
      </form>
  );
};

export default SignUp;
