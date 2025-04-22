import React, { useContext } from "react";
import { MyContext } from "../../Context/UserStore";

function Profile() {
  const { user } = useContext(MyContext);
  return (
    <div>
      <h2>Name : {user.name}</h2>
      <p> Email : {user.email}</p>
    </div>
  );
}

export default Profile;
