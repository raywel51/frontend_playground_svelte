<script lang="ts">
    import {onMount} from 'svelte';
    import {goto} from '$app/navigation';

    onMount(() => {
        sessionStorage.removeItem('token');
        goto('/login');
    });

</script>