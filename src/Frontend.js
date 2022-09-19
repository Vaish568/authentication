import React, { useState } from "react";
import Auth from "./Auth";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import Authentication from "./Authentication";

export default function Frontend() {
  const [user, setUser] = useState("");
  const [type, setType] = useState("");
  const options = ["google", "facebook"];
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    console.log(e);
    setType(e.value);
  };

  // let val = Auth(type);
  const handleSignIn = () => {
    if (type === "google") {
      console.log("gh");
      setValue("google");
    } else if (type === "facebook") {
      setValue("facebook");
      console.log("fh");
    }
    // val
    //   .then((data) => {
    //     console.log(data);
    //     data.signIn();
    //     setUser(data?.googleUser?.profileObj?.givenName);
    //   })
    //   .catch((err) => console.log(err));
  };

  const handleData = (e) => {
    // console.log("from frontend fb", e);
    console.log("from frontend.js: ", e.profileObj.name);
    setUser(e.profileObj.name);
  };

  const handleSignout = () => {
    // val
    //   .then((data) => {
    //     console.log(data);
    //     data.signOut();
    //     setUser(data?.googleUser?.profileObj?.givenName);
    //   })
    //   .catch((err) => console.log(err));
  };

  return (
    <div>
      {!user ? (
        <>
          <div style={{ width: "500px", margin: "0 auto" }}>
            <Dropdown options={options} onChange={handleChange}></Dropdown>
          </div>
          <button onClick={handleSignIn}>sign in sep</button>

          {value === "google" && (
            <>
              {console.log("val", value)}
              <Authentication
                type={type}
                client="704403352235-4cqapmvvc7kii157edo1nvlcg3ucu1ft.apps.googleusercontent.com"
                handleData={handleData}
              />
            </>
          )}
          {value === "facebook" && (
            <Authentication
              type={type}
              client="3158507291074650"
              //  client="819336009427883"
              handleData={handleData}
            />
          )}
        </>
      ) : (
        <>
          <p>Hello {user}</p>
          <button onClick={handleSignout}> sign out sep</button>
        </>
      )}
    </div>
  );
}
