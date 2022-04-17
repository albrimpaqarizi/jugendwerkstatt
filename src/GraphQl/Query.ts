import { gql } from "@apollo/client";

export const LOGIN_GET_TOKEN = gql`
  mutation User($username: String!, $password: String!) {
    createToken(username: $username, password: $password) {
      access
      refresh
    }
  }
`;


export const REFRESH_TOKEN = gql`
  mutation Token($refreshToken: String!) {
    refreshToken(refreshToken: $refreshToken) {
      access
      refresh
    }
  }
`;
