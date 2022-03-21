import { ApolloProvider } from "@apollo/client"
import { client } from "apollo/client"

export const ApolloStore = ({ children }) => {
    return <ApolloProvider client={client}>
        {children}
    </ApolloProvider>
}