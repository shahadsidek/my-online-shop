import { signInWithGooglePopup, createUserDocumentfromAuth } from '../../utils/firebase/firebase.utils';


const SignIn = () => {

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef= await createUserDocumentfromAuth(user);
    };

    return (
        <div>
            <h1>This is the sign in page</h1>
            <button onClick={logGoogleUser}>
                Sign In With Google
            </button>
        </div>
    )
}

export default SignIn;