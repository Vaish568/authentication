import React from "react";
import { useGoogleLogin } from "react-use-googlelogin";

export default function Auth(_type) {
  const gAuth = useGoogleLogin({
    clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
  });
  let data;
  data = gAuth;
  console.log(data);
  return new Promise((resolve, reject) => {
    if (gAuth) {
      resolve(gAuth);
    } else reject("Error ocuuredd");
  });
}
