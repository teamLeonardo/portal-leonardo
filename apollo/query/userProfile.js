import { gql } from "@apollo/client";

export const USER_PROFILE = gql`
    {
        user(id: "dXNlcjox") {
            id
            firstName
            lastName
            description
            email
            avatar {
            url
            }  
        }
    }
`