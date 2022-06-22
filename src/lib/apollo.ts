import { ApolloClient, InMemoryCache} from '@apollo/client'

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4osurzm118c01xkffjv5ezy/master",
  cache: new InMemoryCache()
})