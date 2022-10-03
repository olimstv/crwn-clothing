import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";
import SignUpForm from "../../Components/SignUpForm/SignUpForm";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    // console.log({ user });
  };
  return (
    <div>
      <h1>SignIn</h1>
      <button onClick={logGoogleUser}>sign in</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
