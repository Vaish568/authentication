// import React from "react";
// import FacebookLogin from "react-facebook-login";

// export default function Facebook() {
//   const responseFacebook = (e) => {
//     console.log(e);
//   };
//   const componentClicked = (e) => {
//     console.log("componentclicked", e);
//   };
//   return (
//     <FacebookLogin
//       appId="819336009427883"
//       autoLoad={true}
//       fields="name,email,picture"
//       onClick={componentClicked}
//       callback={responseFacebook}
//     />
//   );
// }
import React, { useState } from "react";
import FacebookLogin from "react-facebook-login";

function FbLogin() {
  const [login, setLogin] = useState(false);
  const [data, setData] = useState({});
  const [picture, setPicture] = useState("");

  const responseFacebook = (response) => {
    console.log(response);
    if (response.status === "unknown") {
      alert("Login failed!");
      setLogin(false);
      return false;
    }
    setData(response);
    setPicture(response.picture.data.url);
    if (response.accessToken) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  };

  const logout = () => {
    setLogin(false);
    setData({});
    setPicture("");
  };

  return (
    <div className="container">
      {!login && (
        <FacebookLogin
          appId="3158507291074650"
          autoLoad={false}
          fields="name,email,picture"
          callback={responseFacebook}
          icon="fa-facebook"
          cssClass="btnFacebook"
          textButton="&nbsp;&nbsp;Sign In with Facebook"
        />
      )}

      {login && (
        <div className="card">
          <div className="card-body">
            <img className="rounded" src={picture} alt="Profile" />
            <h5 className="card-title">{data.name}</h5>
            <p className="card-text">Email ID: {data.email}</p>
            <a href="#" className="btn btn-danger btn-sm" onClick={logout}>
              Logout
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default FbLogin;
