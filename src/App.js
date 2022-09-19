import "./App.css";
import FbLogin from "./Facebook";
import Facebook from "./Facebook";
import Frontend from "./Frontend";
import Google from "./Google";
import GoogleAuthProvider from "./Googlehooks";
import GoogleNative from "./GoogleNative";

function App() {
  return (
    <div className="App">
      hellooo!!
      {/* <Facebook /> */}
      {/* <Google /> */}
      {/* <GoogleAuthProvider />  */}
      {/* <GoogleNative /> */}
      <Frontend />
      {/* <FbLogin /> */}
    </div>
  );
}

export default App;
// import React, { useState, useEffect } from "react";

// import "./App.css";
//import { GoogleLogout, GoogleLogin } from "react-google-login";
// const { OAuth2Client } = require("google-auth-library");
// function App() {
//   const [user, setUser] = useState();
//   const responseGoogle = (response) => {
//     console.log(response);
//     setUser(response.Qt);
//   };
//   const logout = () => {
//     console.log("logged out");
//     setUser();
//   };
//   useEffect(() => {
//     let authObj;
//     window.gapi.load("auth2", () => {
//       window.gapi.auth2
//         .init({
//           client_id:
//             "704403352235-4cqapmvvc7kii157edo1nvlcg3ucu1ft.apps.googleusercontent.com",
//         })
//         .then(() => {
//           authObj = window.gapi.auth2.getAuthInstance();
//           if (authObj.isSignedIn.get()) {
//             const userObj = authObj.currentUser.get();
//             const client = new OAuth2Client(
//               "704403352235-4cqapmvvc7kii157edo1nvlcg3ucu1ft.apps.googleusercontent.com"
//             );
//             async function verify() {
//               const ticket = await client.verifyIdToken({
//                 idToken: userObj.wc.id_token,
//                 audience:
//                   "704403352235-4cqapmvvc7kii157edo1nvlcg3ucu1ft.apps.googleusercontent.com",
//               });
//               const payload = ticket.getPayload();
//               const userid = payload["sub"];
//             }
//             verify()
//               .then(() => setUser(userObj.Qt))
//               .catch(console.error);
//           }
//         })
//         .catch((err) => {
//           console.error(err);
//         });
//     });
//   }, []);
//   return (
//     <div className="App">
//       <header className="App-header">
//         {user && <h1>Welcome, {user.Bd}</h1>}
//         <GoogleLogin
//           clientId="YOUR_CLIENT_ID_HERE.apps.googleusercontent.com"
//           buttonText="Login"
//           onSuccess={responseGoogle}
//           onFailure={responseGoogle}
//         />
//         <GoogleLogout
//           clientId="YOUR_CLIENT_ID_HERE.apps.googleusercontent.com"
//           buttonText="Logout"
//           onLogoutSuccess={logout}
//         />
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
// export default App;
