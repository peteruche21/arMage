import { gql } from 'urql';

export default (address: string) => gql`query {
  transactions(
    owners: ["${address}"]
    tags: [
      {
        name: "Content-Type",
        values: ["image/jpeg", "image/png"]
      },
      {
        name: "App-Name",
        values: ["ArMage"]
      }
    ]
  ) {
    edges {
      node {
        id
        owner {
          address
        }
        fee {
          ar
        }
        data {
          type
        }
        tags {
          name
          value
        }
      }
    }
  }
}`;
