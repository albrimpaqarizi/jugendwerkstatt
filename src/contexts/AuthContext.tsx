import { createContext, useState } from "react";

export const AuthContext = createContext<any>(null);

export const AuthProvider: React.FunctionComponent = ({ children }) => {
  const [isLogedIn, setIsLogedIn] = useState<boolean>();
  const [username, setUsername] = useState();
  const [userToken, setUserToken] = useState<string>();
  const [refreshToken, setRefreshToken] = useState<string>();
  return (
    <AuthContext.Provider
      value={{
        isLogedIn,
        setIsLogedIn,
        username,
        setUsername,
        userToken,
        setUserToken,
        refreshToken,
        setRefreshToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
