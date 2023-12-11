<script>
import { store } from "../store.js" //state management

export default {
    name: "Header",
    data() {
        return {
            store
        }
    },
    methods: {
    },
    mounted() {
    }
}
</script>

<template>
    <!--container  -->
    <div class="container">
        <!-- logo -->
        <div class="logo">ok</div>
        <!-- options -->
        <div>
            <ul class="options">
                <li>HOME</li>
                <li>ABOUT</li>
                <li>SERVICE</li>
                <li>WORK</li>
                <li>ARTICLES</li>
                <li>
                    <button>GET QUOTE</button>

                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped >
.container {
    display: flex;
    justify-content: space-around;
}

.options {
    display: flex;
    justify-content: space-around;
    list-style: none;
}

li,
.logo {
    margin: 5px 10px;
    display: flex;
    align-items: center;
}

li:hover {
    color: rgb(207, 207, 57);
}
</style>