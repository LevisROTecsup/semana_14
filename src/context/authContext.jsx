import * as React from "react";

const AuthContext = React.createContext();
AuthContext.displayName = "AuthContext";

const AuthProvider = ({ children }) => {
  const [username, setUsername] = React.useState("");
  return <AuthContext.Provider value={{ username, setUsername }}>{children}</AuthContext.Provider>;
};

function useAuth() {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error(`useAuth must be used within a AuthProvider`);
  }
  return context;
}

export { AuthProvider, useAuth };
