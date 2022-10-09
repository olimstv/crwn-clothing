import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";
import SignUpForm from "../../Components/SignUpForm/SignUpForm";
import SignInForm from "../../Components/SignInForm/SignInForm";

const Authentication = () => {
  return (
    <div>
      <h1>Sign In Page</h1>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
