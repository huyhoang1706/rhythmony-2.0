import { gql } from '@apollo/client'

export const FETCH_ARTIST = gql`
    query Artists {
        artists(pageSize: 10, pageNo: 1) {
            
        }
    }
`
