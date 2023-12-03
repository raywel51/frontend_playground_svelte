<script lang="ts">
   import { onMount } from 'svelte';
  import UserTable from './component/UserTable.svelte';

   let users: any[] = [];

   onMount(async () => {
   try {
      const response = await fetch('https://fakestoreapi.com/users');
      if (response.ok) {
         users = await response.json();
      } else {
         throw new Error('Failed to fetch data');
      }
   } catch (error) {
      console.error(error);
      // Handle error if needed
   }
   });

   console.log(users)
</script>

<style lang="less">
   .max-w-xl {
    max-width: 1000px; // Set your desired maximum width here
   }
</style>

<UserTable {users} />