<script>
  import client from "./graphql-client";
  import gql from "graphql-tag";
  let getUsers = {
    username: "",
    email: ""
  };

  const query = gql`
    query {
      getUsers {
        username
        email
        id
      }
    }
  `;

  const getUser = client.subscribe({
    query
  });
</script>

<main>
  {#if $getUser && $getUser.data}
    {#each $getUser.data.getUsers as u}
      <tr>
        <td>{u.username}</td>
        <td>{u.email}</td>
        <td>{u.id}</td>
      </tr>
    {/each}
  {/if}
</main>
