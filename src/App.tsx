import { AuthProvider } from "./contexts/AuthContext";
import Router from "./routes/Router";
import React, {useEffect, useState} from "react";
import { useMutation } from "@apollo/client";
import { REFRESH_TOKEN } from "./GraphQl/Query";

import { ApolloClient, ApolloProvider, ApolloLink, HttpLink, InMemoryCache, concat } from '@apollo/client';








function App() {

  const [refreshTokenFunction, { loading, error, data }] = useMutation(REFRESH_TOKEN);
  
  const httpLink = new HttpLink({ uri: 'http://localhost:8061/api/graphql' });

  const authMiddleware = new ApolloLink((operation, forward: any) => {
    const definitions :any = operation.query.definitions[0];
    const requestName = definitions.selectionSet.selections[0].name.value;
    console.log('requestName:', requestName);

    if(requestName!="createToken" && requestName!="refreshToken"){
      console.log('this is a request that needs authorization');

      // const jwtAccessToken = localStorage.getItem('jugendwerkstattAccessToken');
      // if(jwtAccessToken!=null){
      //   const decodedJwtToken = JSON.parse(atob(jwtAccessToken.split('.')[1]));
      //   const jwtExpirationDatetimeInSeconds = decodedJwtToken.exp;
      //   const currentDatetimeInSeconds = Date.now()/1000;        

      //   if(jwtExpirationDatetimeInSeconds >= currentDatetimeInSeconds){
      //       //refresh token:
      //       const jwtRefreshToken = localStorage.getItem('jugendwerkstattRefreshToken');
      //       if(jwtRefreshToken!=null){
      //         //get new jwt access token
      //         // refreshTokenFunction({
      //         //   variables: {
      //         //     refreshToken: localStorageRefreshToken,
      //         //   },
      //         // });


      //       }
      //       else{
      //         console.log('redirect to login');
      //         //clear stage and storage
      //         //redirect to login
      //       }
      //   }
      // }
      // else{
      //   console.log('refresh');
      //     //refresh token:
      //     // const jwtRefreshToken = localStorage.getItem('jugendwerkstattRefreshToken');
      //     // if(jwtRefreshToken!=null){
      //     //   //get new jwt access token
      //     // }
      //     // else{
      //     //   //clear stage and storage
      //     //   //redirect to login
      //     // }
      // }

      // operation.setContext(({ headers = {} }) => ({
      //   headers: {
      //     headers,
      //     authorization: "bearer "+jwtAccessToken
      //   }
      // }));
    }
    else{
      console.log('this is request that does NOT need authorization');
    }
    return forward(operation);
  });

  const client = new ApolloClient({
    uri: "http://localhost:8061/api/graphql",
    cache: new InMemoryCache()
    //link: httpLink //concat(authMiddleware, httpLink)
    
  });

  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </ApolloProvider>
  );
}

export default App;
