<script lang="ts">
    import {onMount, beforeUpdate} from 'svelte';
    import {goto} from '$app/navigation';
    import {Burger, Divider, Menu, Text, TextInput} from '@svelteuidev/core';
    import {
        Camera,
        ChatBubble,
        Exit,
        FileText,
        Gear,
        GithubLogo,
        MagnifyingGlass,
        Trash,
        Width
    } from 'radix-icons-svelte';

    let opened = false;

    let currentPath = '';
    let username = 'officeone66';
    const pathsToHide = ['/login', '/otherpath'];
    const pathsToHide1 = ['/login1', '/otherpath1'];
    const pathsToHide2 = ['/login2', '/otherpath2'];

    let shouldShowMenu = false;

    let menuType = ''; // Define a variable to determine menu type

    let isSize = typeof window !== 'undefined' && window.innerWidth > 768;

    const handleResize = () => {
        console.log(window.innerWidth)
        isSize = window.innerWidth > 1024;
    }

    const getCurrentPath = () => {
        currentPath = window.location.pathname;
        if (!pathsToHide.includes(currentPath)) {
            shouldShowMenu = true;
            menuType = 'type1'; // Set menu type based on conditions
        } else if (!pathsToHide1.includes(currentPath)) {
            shouldShowMenu = true;
            menuType = 'type2';
        } else if (!pathsToHide2.includes(currentPath)) {
            shouldShowMenu = true;
            menuType = 'type3';
        } else {
            shouldShowMenu = false;
        }
    };

    const handleLogout = () => {
        console.log("H")
        sessionStorage.removeItem('token');
        goto('/login');
    }

    onMount(() => {
        getCurrentPath()

        if (typeof window !== 'undefined') {
            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }
    });

    beforeUpdate(() => {
        if (typeof window !== 'undefined') {
            isSize = window.innerWidth > 1024;
        }
    });

</script>

<style lang="less">
    @myColor: #404855;
    @textColor: #FFFFFF;
    @textSelect: #18BC9C;

    .main_color {
        background-color: @myColor;
    }

    .text_title {
        color: @textColor;
    }

    .text_title_select {
        color: @textSelect;
    }

</style>

<div class="navbar main_color bg-base-100">
    <div class="flex-1 text_title">
        <img src="https://backend.dev.letmein.asia/imgs/logo.png" alt="GETMEIN Logo" class="float-left h-10 mr-4"/>
    </div>

    {#if shouldShowMenu}
        {#if menuType === 'type1'}
            {#if isSize === true}
                <div class="flex-none">
                    <ul class="menu menu-horizontal px-1">
                        <li class="text_title"><a href="/user">ประวัติการขอ QR</a></li>
                        <li class="text_title_select"><a href="/users">ประวัติการขอ QR</a></li>
                        <li class="text_title" on:click|preventDefault={handleLogout}><a>Login({username})</a></li>
                    </ul>
                </div>
            {:else}
                <div class="flex-none">
                    <ul class="menu menu-horizontal px-1">

                        <Menu>
                            <Burger color="#ffffff" slot="control"
                                    opened={opened}
                                    on:click={() => (opened = !opened)}
                            />

                            <Menu.Item icon={FileText}>ประวัติการขอ QR</Menu.Item>
                            <Divider/>

                            <Menu.Item icon={GithubLogo} disabled>
                                officeone59
                            </Menu.Item>

                            <Menu.Item color="red" icon={Exit} on:click={handleLogout}>Logout</Menu.Item>
                        </Menu>

                    </ul>
                </div>
            {/if}
        {/if}

        {#if menuType === 'type2'}
            <div class="flex-none">
                <ul class="menu menu-horizontal px-1">
                </ul>
            </div>
        {/if}

        <!-- Add other conditions for other menu types (type2, type3) as needed -->
    {:else}
        <div class="flex-none">
            <ul class="menu menu-horizontal px-1">

            </ul>
        </div>
    {/if}
</div>