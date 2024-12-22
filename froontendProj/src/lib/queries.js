import { gql } from '@apollo/client';

export const GET_SELLER_LISTINGS = gql`
  query GetSellerListings {
    getSellerListings {
      id
      name
      buyer {
        id
        name
      }
    }
  }
`;

export const DELETE_HOUSE = gql`
  mutation DeleteHouse($houseId: ID!) {
    deleteHouse(houseId: $houseId) {
      id
    }
  }
`;