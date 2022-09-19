import React, { useState } from "react";
import { useGoogleLogin } from "react-use-googlelogin";
const GoogleAuthcontext = React.createContext();

// export default function GoogleAuthProvider() {
//   const [user, setUser] = useState("");
//   const googleAuth = useGoogleLogin({
//     clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
//   });
//   console.log("Hooks auth", googleAuth);
//   console.log(user);
//   console.log(googleAuth.googleUser?.profileObj?.givenName);
//   const handleSignout = () => {
//     googleAuth.signOut();
//     setUser(googleAuth.googleUser?.profileObj?.givenName);
//   };

//   const handleSignIn = () => {
//     let value = googleAuth.signIn();
//     value.then((data) => {
//       setUser(data.profileObj.givenName);
//       console.log("data from aign in auth", data.profileObj.givenName);
//     });
//   };
//   return (
//     <div>
//       {user ? (
//         <>
//           <p>{user}</p>
//           <button onClick={handleSignout}>sign out</button>
//         </>
//       ) : (
//         <button onClick={handleSignIn}> sign in</button>
//       )}
//     </div>
//   );
// }
