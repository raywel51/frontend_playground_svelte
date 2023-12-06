<script lang="ts">
    import {onMount} from 'svelte';
    import {page} from '$app/stores';
    import NavBar from "../../component/NavBar.svelte";
    import Footer from "../../component/Footer.svelte";
    import {goto} from "$app/navigation";

    const goToHomePage = () => {
        goto('/')
    }


    onMount(() => {
        document.title = 'LETMEIN: Smart Living and Workplace Platform';

        setTimeout(() => {
            goToHomePage();
        }, 5000);
    });


</script>

<style lang="less">

</style>

<div>
    <header>

    </header>

    <div class="max-w-xl mx-auto flex items-center justify-center h-screen">
        <div class="text-center">
            <p class="text-base font-semibold text-indigo-600">404</p>
            <h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">{$page.error.message}</h1>
            <p class="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
            <div class="mt-10 flex items-center justify-center gap-x-6">
                <button class="btn btn-primary" on:click={goToHomePage}>HomePage</button>
            </div>
        </div>
    </div>

    <footer>

    </footer>
</div>

