<script>

  import { getContext } from "svelte";
  const client = getContext("client");
  import { gql } from 'apollo-boost';
  const EVERYTHING = gql`
    query{sayHello(name:"lslls"){
    
      message
    }}
  `;

  export async function preload() {
    return {
      cache: await client.query({
        query: EVERYTHING
      })
    }
  }
 getContext(client);

  // query a subset of the preloaded (the rest if for Account)
  const preferences = query(client, EVERYTHING);

  {#await $preferences}
  Loading won't be shown if preloaded
{:then result}
  ...
{/await}
  
</script>



<style>
	h1, figure, p {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	figure {
		margin: 0 0 1em 0;
	}

	img {
		width: 100%;
		max-width: 400px;
		margin: 0 0 1em 0;
	}

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<h1>Great success!</h1>

<figure>
	<img alt='Success Kid' src='successkid.jpg'>
	<figcaption>Have fun with Sapper!</figcaption>
</figure>

<p>
<strong>Try editing this file (src/routes/index.svelte) to test live reloading.</strong></p>
