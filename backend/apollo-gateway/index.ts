import { ApolloGateway, IntrospectAndCompose } from "@apollo/gateway";
import { ApolloServer } from "apollo-server";

const gateway = new ApolloGateway({
  supergraphSdl: new IntrospectAndCompose({
    subgraphs: [{ name: "metadata", url: "http://localhost:5000/graphql" }],
  }),
});

const server = new ApolloServer({
  gateway,
  cors: {
    origin: "http://localhost:3000",
  },
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
