<script lang="ts">
    import {onMount} from 'svelte';
    import {goto} from '$app/navigation';

    let currentPath = '';
    let username = 'officeone66';
    const pathsToHide = ['/login', '/otherpath'];
    const pathsToHide1 = ['/login1', '/otherpath1'];
    const pathsToHide2 = ['/login2', '/otherpath2'];

    let shouldShowMenu = false;
    let menuType = ''; // Define a variable to determine menu type

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

    onMount(getCurrentPath);
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

    @media screen and (max-width: 768px) {
        .navbar {
            /* Example adjustments for smaller screens */
            display: flex;
            flex-direction: column;
            padding: 10px; /* Adjust padding */
        }

        .menu {
            /* Example adjustments for smaller screens */
            display: flex;
            flex-direction: column;
            padding: 0; /* Modify padding */
        }

        .text_title,
        .text_title_select {
            /* Example adjustments for smaller screens */
            padding: 8px; /* Adjust padding */
        }

        .logout-button {
            /* Style the button to match your design */
            /* ...other styles */
            cursor: pointer; /* Ensure the pointer cursor for better indication */
        }

        /* You can add more specific adjustments for smaller screens as needed */
    }

</style>

<div class="navbar main_color bg-base-100">
    <div class="flex-1 text_title">
        <img src="https://backend.dev.letmein.asia/imgs/logo.png" alt="GETMEIN Logo" class="float-left h-10 mr-4"/>
    </div>

    {#if shouldShowMenu}
        {#if menuType === 'type1'}
            <div class="flex-none">
                <ul class="menu menu-horizontal px-1">
                    <li class="text_title"><a href="/user">ประวัติการขอ QR</a></li>
                    <li class="text_title_select"><a href="/users">ประวัติการขอ QR</a></li>
                    <li class="text_title" on:click|preventDefault={handleLogout}><a>Login({username})</a></li>
                </ul>
            </div>
        {/if}

        {#if menuType === 'type2'}
            <div class="flex-none">
                <ul class="menu menu-horizontal px-1">
                    <li class="text_title_select"><a href="/login">เช้าสู่ระบบ</a></li>
                </ul>
            </div>
        {/if}

        <!-- Add other conditions for other menu types (type2, type3) as needed -->
        {:else}
        <div class="flex-none">
                <ul class="menu menu-horizontal px-1">
                    <li class="text_title_select"><a href="/login">เช้าสู่ระบบ</a></li>
                </ul>
            </div>
            {/if}

</div>
