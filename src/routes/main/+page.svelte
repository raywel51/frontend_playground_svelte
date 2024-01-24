<script lang="ts">
    import {onMount} from 'svelte';
    import Template from "../../component/MainCompenent.svelte"
    import Icon from '@iconify/svelte';

    let errorMessage = '';

    onMount(async () => {
        document.title = 'LETMEIN: Smart Living and Workplace Platform';
    });

    const handleViewFilledClick = () => {
        console.log('View-filled icon clicked!');
        //showDialog('View-filled icon clicked!');
    };

    const handleEditOutlineClick = () => {
        console.log('Edit-outline icon clicked!');
        //showDialog('Edit-outline icon clicked!');
    };

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

    .overflow-x-auto {
        margin-left: auto;
        margin-right: auto;
        width: 80%;
    }

    .image-container {
        display: flex;
        justify-content: center;
    }

    .image-container img {
        width: 43px; /* Make the image fill its container */
        height: auto; /* Let the height adjust proportionally */
    }

    th {
        text-align: center;
        color: #337ab7;
    }

    td {
        text-align: center;
    }

    .icon-space {
        width: 10px; /* Adjust the space width as needed */
        display: inline-block; /* Ensures the space takes up horizontal space */
    }

</style>

<Template>

    <div class="overflow-x-auto">
        <p>ประวัติการขอ QR Code</p>
        <p>แสดง 1 ถึง 100 จาก 122 ผลลัพธ์</p><br>
        <table class="table">
            <!-- head -->
            <thead>
            <tr>
                <th>#</th>
                <th>ช่องทางขอ QR Code</th>
                <th>หมายเลข QR Code</th>
                <th>ชื่อ-นามสกุล</th>
                <th>อีเมล</th>
                <th>วัน - เวลาที่ลงทะเบียน</th>
                <th>สถานะการอนุมัติ</th>
                <th>ดาวน์โหลด QR Code</th>
            </tr>
            </thead>
            <tbody>
            <!-- row 1 -->
            <tr class="hover">
                <th>1</th>
                <td>
                    <div class="image-container">
                        <Icon icon="twemoji:letter-e" color="#345c94" width="43" height="43"/>
                    </div>
                </td>
                <td>2934</td>
                <td>นนทวัฒน์ กิตยวัฒน์</td>
                <td>kittayawat.aong@gmail.com</td>
                <td>23-12-2023 | 00:00 น.</td>
                <td>อนุมัติแล้ว</td>
                <td>
                    <div class="image-container">
                        <button on:click={handleViewFilledClick}>
                            <Icon icon="carbon:view-filled" color="#345c94" width="23" height="23"/>
                        </button>
                        <div class="icon-space"></div>
                        <button on:click={handleEditOutlineClick}>
                            <Icon icon="material-symbols:edit-outline" color="#345c94" width="23" height="23"/>
                        </button>
                    </div>
                </td>
            </tr>
            <!-- row 1 -->
            <tr class="hover">
                <th>1</th>
                <td>
                    <div class="image-container">
                        <Icon icon="twemoji:letter-e" color="#345c94" width="43" height="43"/>
                    </div>
                </td>
                <td>2934</td>
                <td>นนทวัฒน์ กิตยวัฒน์</td>
                <td>kittayawat.aong@gmail.com</td>
                <td>23-12-2023 | 00:00 น.</td>
                <td>อนุมัติแล้ว</td>
                <td>
                    <div class="image-container">
                        <button on:click={handleViewFilledClick}>
                            <Icon icon="carbon:view-filled" color="#345c94" width="23" height="23"/>
                        </button>
                        <div class="icon-space"></div>
                        <button on:click={handleEditOutlineClick}>
                            <Icon icon="material-symbols:edit-outline" color="#345c94" width="23" height="23"/>
                        </button>
                    </div>
                </td>
            </tr>
            </tbody>
        </table>
    </div>


</Template>