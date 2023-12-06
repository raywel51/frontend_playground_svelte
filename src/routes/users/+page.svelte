<script lang="ts">
    import {onMount} from "svelte";
    import UserTable from "../../component/UserTable.svelte";
    import NavBar from "../../component/NavBar.svelte";
    import FooterBar from "../../component/Footer.svelte"

    let users: any[] = [];
    let pages: string = "users";

    onMount(async () => {
        try {
            const response = await fetch("https://fakestoreapi.com/users");
            if (response.ok) {
                users = await response.json();
            } else {
                throw new Error("Failed to fetch data");
            }
        } catch (error) {
            console.error(error);
            // Handle error if needed
        }
    });

    console.log(users);
</script>

<div>
    <NavBar/>
    <div class="max-w-xl mx-auto">
        <UserTable {users}/>
    </div>

    <footer>
        <div class="footer">
            <FooterBar/>
        </div>
    </footer>
</div>

<style lang="less">
    .max-w-xl {
        max-width: 75rem /* 576px */;
    }

    .footer {
        bottom: 0;
    }

    header, .footer {
        position: fixed;
        width: 100%; /* Make sure the navbar spans the entire width */
        z-index: 100; /* Set a high z-index to ensure it's on top */
    }
</style>
