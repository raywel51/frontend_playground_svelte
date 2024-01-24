<script lang="ts">
    import { Modal, Group, Button } from '@svelteuidev/core';
    import NavBar from "../../component/NavBar.svelte";
    import Footer from "../../component/Footer.svelte";
    import {goto} from '$app/navigation';
    import {onMount} from 'svelte';

    let email = '';
    let password = '';
    let errorMessage = '';
    let token = '';

    const handleOk = async () => {
        errorMessage = '';
    }

    const showDialog = async (message: String) => {
        errorMessage = message
        document.getElementById('my_modal_5').showModal()
    }

    let opened = false;
  let modalContent = "Hello, this is the text inside the modal!";

  function closeModal() {
      opened = false;
  }
    async function handleLogin() {


        const loginData = {
            username: email,
            password: password
        };

        try {

            const response = await fetch('http://raywel.ddns.net:1660/v2/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginData) // Convert data to JSON string before sending
            });

            if (!response.ok) {
                if (response.status === 401) {
                    // Handling 401 Unauthorized error
                    const errorData = await response.json(); // Assuming error data is in JSON format
                    const errorMessage = errorData.message; // Extract the error message
                    throw new Error(`Unauthorized: ${errorMessage}`);
                } else {
                    throw new Error('Network response was not ok.');
                }
            }

            const responseData = await response.json();
            console.log(responseData)

            sessionStorage.setItem('token', responseData['token']);
            console.log('Login successful');
            console.log('Token:', responseData['token']);

            showDialog(responseData['message']);

            await new Promise(resolve => {
                setTimeout(resolve, 2000);
            });

            goto('/');

        } catch (error: any) {
            console.error('Error:', error);
            showDialog(error.toString());
        }
    }

    onMount(() => {

        document.title = 'LETMEIN: Smart Living and Workplace Platform';
        const storedToken = sessionStorage.getItem('token');
        if (storedToken) {
            token = storedToken;
            console.log('Token retrieved from session storage:', token);
            goto('/');
        } else {
            console.error('token null');
        }
    });
</script>

<style lang="less">
    body {
        margin: 0;
        font-family: Arial, sans-serif;
    }

    header, .footer {
        position: fixed;
        width: 100%; /* Make sure the navbar spans the entire width */
        z-index: 100; /* Set a high z-index to ensure it's on top */
    }

    .footer {
        bottom: 0;
    }

    .center-image {
        align-items: center;
    }

</style>

<header>
    <NavBar/>
</header>

<body>
<div class="relative flex flex-col h-screen overflow-hidden">
    <div class="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-lg">
        <div class="center-image">
            <img src="/logo_black.png" alt="GETMEIN Logo" class="h-20 center-image"/>
        </div>
        <form class="space-y-4" on:submit|preventDefault={handleLogin}>
            <div>
                <label class="label">
                    <span class="text-base label-text">Email</span>
                </label>
                <input type="text" placeholder="Email Address" class="w-full input input-bordered input-primary"
                       bind:value={email}/>
            </div>
            <div>
                <label class="label">
                    <span class="text-base label-text">Password</span>
                </label>
                <input type="password" placeholder="Enter Password"
                       class="w-full input input-bordered input-primary" bind:value={password}/>
            </div>
            <a href="#" class="text-xs text-gray-600 hover:underline hover:text-blue-600">Forget Password?</a>
            <div>
                <button class="btn btn-primary">Login</button>


                <dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle">
                    <div class="modal-box">
                        <h3 class="font-bold text-lg">Hello!</h3>
                        <p class="py-4">{errorMessage}</p>
                        <div class="modal-action">
                            <form method="dialog">
                                <button on:submit|preventDefault={handleOk()} class="btn">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>


            </div>
        </form>
    </div>

</div>


</body>

<footer>

    <div class="footer">
        <Footer/>
    </div>
</footer>

