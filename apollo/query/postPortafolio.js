import { gql } from "@apollo/client";

export const POST_PORTAFOLIO = gql`
{
  posts(where: {categoryName: "portafolio"}) {
    edges {
      node {
        id
        title
        uri
        slug
        content(format: RENDERED)
      }
    }
  }
}
`