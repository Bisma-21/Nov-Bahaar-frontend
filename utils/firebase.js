import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
export const firebaseGoogleSignIn = async () => {
  const provider = new GoogleAuthProvider(); // create instance
  //popup  window
  const authApp = getAuth();
  const userDetail = await signInWithPopup(authApp, provider);
  const data = GoogleAuthProvider.credentialFromResult(userDetail);
  const idToken = data.idToken;
  //   const email = userDetail.user.email;
  //   console.log("uuuuu", data);
  console.log("id token ===>", idToken);
  console.log("id token ===>", email);
  console.log("userdetail---->", userDetail);
  return idToken;
};
