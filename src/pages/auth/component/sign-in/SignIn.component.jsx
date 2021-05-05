//COMPONENT
import useInput from "src/hooks/useInput.hook";
import { useDispatch } from "react-redux";
import { userSignInAsync } from "src/redux/auth/auth.actions";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";

//BASE COMPONENTS
import Button from "src/Component/Button/button.component";
import Input from "src/Component/Input/Input.component";
const SingIn = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { handleInput, inputState } = useInput();


  const { errorMessage, isLoading } = useSelector((store) => ({
    errorMessage: store.auth.errorMessage,
    isLoading: store.auth.isLoading,
  }));
  const handleSubmit = async (event) => {
    event.preventDefault();
    const isOK = await dispatch(userSignInAsync(inputState));
    if (isOK) history.push("/shop");
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2> I already have an account</h2>
      <p>Sign in with your email and password</p>
      <Input
        name="email"
        type="text"
        placeholder="Email"
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
      {errorMessage && <div className="u-text--error">{errorMessage}</div>}
      <Button type="submit" isLoading={isLoading}>
        Sign In
      </Button>
    </form>
  );
};

export default SingIn;
