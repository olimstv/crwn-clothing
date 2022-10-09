import SignUpForm from "../../Components/SignUpForm/SignUpForm";
import SignInForm from "../../Components/SignInForm/SignInForm";
import "./Authentication.scss";
const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
