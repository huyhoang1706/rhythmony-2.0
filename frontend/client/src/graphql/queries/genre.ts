import { gql } from '@apollo/client'

export const FETCH_GENRES = gql`
  query Genres {
    genres {
      name
    }
  }
`
