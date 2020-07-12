<script context="module">
  import { ApolloClient } from "apollo-client";
  import { createHttpLink } from "apollo-link-http";
  import { InMemoryCache } from "apollo-cache-inmemory";
  import { RetryLink } from "apollo-link-retry";
  

  export async function preload(page, session) {
    const httpLink = createHttpLink({
      // Neccessary because it is a json property which is a string
      uri: `http${process.env.BACKEND_SSL ? "s" : ""}://${
        process.env.SERVER_NAME
      }:${process.env.SERVER_PORT}/graphql`,
      credentials: "include",
      fetch: this.fetch
    });

    const retryLink = new RetryLink({
      attempts: { max: 3 },
      delay: { initial: 200 }
    });

    const link = retryLink.concat(httpLink);

    const client = new ApolloClient({
      link,
      cache: new InMemoryCache(),
      name: "Some Website",
      version: "3.0"
    });

    return { client };
  }
</script>

<script>
  import { setContext } from "svelte";

  export let client;
  setContext("client", client);

  import Nav from '../components/Nav.svelte';
  export let segment;
</script>

<style>
	main {
		position: relative;
		max-width: 56em;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

<Nav {segment}/>

<main>
	<slot></slot>
</main>