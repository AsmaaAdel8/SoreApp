import React, { createContext, useState } from "react";

export const MyContext = createContext();
const MyProvider = ({ children }) => {
  const [user, SetUser] = useState({
    name: "",
    email: "",
    passward: "",
    confirmPassward: "",
    phoneNumber: "",
    loge: false,
  });

  return (
    <MyContext.Provider value={{ user, SetUser }}>
      {children}
    </MyContext.Provider>
  );
};
export default MyProvider;
