const { ApolloClient, InMemoryCache } = require("@apollo/client");

const uri = "http://localhost/wordpress/graphql"

export const client = new ApolloClient({
    uri,
    cache: new InMemoryCache()
});
