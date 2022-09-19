import React, { createRef, useEffect, useRef, useState } from "react";

import { GoogleLogout, GoogleLogin } from "react-google-login";

export default function Google() {
  const [user, setUser] = useState("");
  let input = useRef();
  useEffect(() => {
    console.log("Calleld useeffect");
    // console.log(input.current);
    // // input.current.click();
  }, []);

  const client =
    "704403352235-4cqapmvvc7kii157edo1nvlcg3ucu1ft.apps.googleusercontent.com";

  const onLoginSuccess = (response) => {
    console.log("Log in sucess", response);
  };

  const onLoginFailure = (response) => {
    console.log("Log in failed", response);
  };

  return (
    <div>
      {/* <GoogleLogin
          clientId={client}
          buttonText="Login"
          onSuccess={onLoginSuccess}
          onFailure={onLoginFailure}
          cookiePolicy={"single_host_origin"}
        /> */}
      <GoogleLogin
        clientId={client}
        render={(renderProps) => (
          <button
            // ref={input}
            onClick={renderProps.onClick()}
            disabled={renderProps.disabled}
          >
            This is my custom Google button
          </button>
        )}
        buttonText="Login"
        onSuccess={onLoginSuccess}
        onFailure={onLoginFailure}
        cookiePolicy={"single_host_origin"}
      />
      {/* <GoogleLogin
        clientId={client}
        render={(renderProps) => {
          <button
            ref={input}
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
          >
            Login with google
          </button>;
        }}
        buttonText="Login"
        onSuccess={onLoginSuccess}
        onFailure={onLoginFailure}
        cookiePolicy={"single_host_origin"}
      /> */}
    </div>
  );
}
