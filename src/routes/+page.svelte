<script lang="ts">
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';

  let token = '';

  onMount(() => {
    document.title = 'LETMEIN: Smart Living and Workplace Platform';
    const storedToken = sessionStorage.getItem('token');
    if (storedToken) {
      token = storedToken;
      console.log('Token retrieved from session storage:', token);
      goto('/main');
    } else {
      goto('/login');
    }
  });
</script>