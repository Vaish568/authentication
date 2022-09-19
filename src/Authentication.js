import React from "react";
import { GoogleLogout, GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login";

export default function Authentication({ type, client, handleData }) {
  let content = "";
  const onLoginSuccess = (response) => {
    console.log("Log in sucess", response);
    handleData(response);
  };

  const onLoginFailure = (response) => {
    console.log("Log in failed", response);
  };
  const responseFacebook = (e) => {
    console.log("facebook", e);
    handleData(e);
  };
  const componentClicked = (e) => {
    console.log("componentclicked", e);
  };
  if (type === "google") {
    console.log("ghl");
    content = (
      <GoogleLogin
        clientId={client}
        render={(renderProps) => (
          <button
            style={{ display: "none" }}
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
    );
  } else if (type === "facebook") {
    content = (
      <FacebookLogin
        appId={client}
        autoLoad={false}
        fields="name,email,picture"
        callback={responseFacebook}
        icon="fa-facebook"
        cssClass="btnFacebook"
        textButton="&nbsp;&nbsp;Sign In with Facebook"
        buttonStyle={{ display: "none" }}
      />
    );
  }

  return <>{content}</>;
}
