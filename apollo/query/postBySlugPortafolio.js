import { gql } from "@apollo/client";

export const POST_PORTAFOLIO_BY_SLUG = gql`
  query postBy($slug: String!) {
    postBy(slug: $slug) {
      id
      title
      uri
      slug
      content(format: RENDERED)
    }
  }
`