import { AuthProvider } from "./contexts/AuthContext";
import Router from "./routes/Router";
import React, {useEffect} from "react";

import { ApolloClient, ApolloProvider, ApolloLink, HttpLink, InMemoryCache, concat } from '@apollo/client';

const httpLink = new HttpLink({ uri: 'http://localhost:8061/api/graphql' });

const authMiddleware = new ApolloLink((operation, forward: any) => {
  // add the authorization to the headers
  const jwtAccessToken = localStorage.getItem('jugendwerkstattAccessToken');

  console.log('test1', jwtAccessToken);
  if(jwtAccessToken!=null){
    const decodedJwtToken = JSON.parse(atob(jwtAccessToken.split('.')[1]));
    const jwtExpirationDatetimeInSeconds = decodedJwtToken.exp;
    const currentDatetimeInSeconds = Date.now()/1000;
    
    if(jwtExpirationDatetimeInSeconds >= currentDatetimeInSeconds){
        //refresh token:
        // const jwtRefreshToken = localStorage.getItem('jugendwerkstattRefreshToken');
        // if(jwtRefreshToken!=null){
        //   //get new jwt access token
        // }
        // else{
        //   //redirect to login
        // }
    }
  }
  else{
      //refresh token:
      // const jwtRefreshToken = localStorage.getItem('jugendwerkstattRefreshToken');
      // if(jwtRefreshToken!=null){
      //   //get new jwt access token
      // }
      // else{
      //   //redirect to login
      // }
  }


  operation.setContext(({ headers = {} }) => ({
    headers: {
      headers,
      authorization: "bearer "+jwtAccessToken
    }
  }));

  return forward(operation);
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: concat(authMiddleware, httpLink),
  uri: "http://localhost:8061/api/graphql",
});


function App() {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </ApolloProvider>
  );
}

export default App;
