import { GraphQLClientNode } from "graphql-client-hybrid";

import { GRAPHQL_API_URL } from "~/config";

export const graphqlClient = new GraphQLClientNode({
  endpoint: GRAPHQL_API_URL,
});
