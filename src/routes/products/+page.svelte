<script lang="ts">
   export let data;
   const products = data.products
</script>

{#each products as product}
   <ul>
      <li>{product.title}</li>
   </ul>
{/each}
<h1>Welcome to Product</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
