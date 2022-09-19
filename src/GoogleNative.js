// import React, { useState } from "react";
// import {
//   GoogleSignin,
//   statusCodes,
// } from "@react-native-google-signin/google-signin";

// export default function GoogleNative() {
//   const [state, setState] = useState("");
//   const signIn = async () => {
//     try {
//       await GoogleSignin.hasPlayServices();
//       const userInfo = await GoogleSignin.signIn();
//       setState({ userInfo });
//     } catch (error) {
//       if (error.code === statusCodes.SIGN_IN_CANCELLED) {
//         // user cancelled the login flow
//         console.log("errr");
//       } else if (error.code === statusCodes.IN_PROGRESS) {
//         // operation (e.g. sign in) is in progress already
//         console.log("errr");
//       } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
//         // play services not available or outdated
//         console.log("errr");
//       } else {
//         // some other error happened
//         console.log("errr");
//       }
//     }
//   };

//   return (
//     <div>
//       GoogleNative
//       {console.log(state)}
//       <button onClick={signIn}>Clicke me!</button>
//     </div>
//   );
// }
