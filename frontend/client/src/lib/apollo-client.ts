import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support";

export const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
      fetchOptions: { cache: "force-cache" },
      // alternatively you can override the default `fetchOptions` on a per query basis
      // ```js
      // const result = await getClient().query({
      //   query: MY_QUERY,
      //   context: {
      //     fetchOptions: { cache: "force-cache" },
      //   },
      // });
      // ```
    }),
  });
});
