<script lang="ts">
   import NavBar from "../component/NavBar.svelte";
   import FooterBar from "../component/Footer.svelte"
   import {goto} from '$app/navigation';
   import { onMount} from 'svelte';
    import {fly} from 'svelte/transition';
   import {Affix, Button, Space, Text} from '@svelteuidev/core';
    import {ArrowUp} from 'radix-icons-svelte';

   let token = '';

//   onMount(() => {
//        document.title = 'LETMEIN: Smart Living and Workplace Platform';
//        const storedToken = sessionStorage.getItem('token');
//        if (storedToken) {
//            token = storedToken;
//            console.log('Token retrieved from session storage:', token);
//            goto('/');
//        } else {
//            console.error('token null');
//        }
//    });

</script>

<style lang="less">
    body {
     margin: 0;
    padding: 0;
     font-family: Arial, sans-serif;
     display: flex;
     flex-direction: column;
     min-height: 93vh; /* ขั้นต่ำสูงสุดของสูงของ body */
 }
 
 header {
     position: fixed;
     width: 100%;
     z-index: 100;
 }
 
 footer {
     margin-top: auto;
     width: 100%;
     position: fixed;
     bottom: 0;
     z-index: 100;
 }
   
   
 </style>

<header>
   <NavBar/>
</header>

<body>
<Space h={120}/>
   <slot></slot>
</body>
