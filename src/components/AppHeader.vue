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
        <div class="logo"><img src="/public/construction/images/construction_logo.png" alt=""></div>
        <!-- options -->
        <div class="container-options">
            <ul class="options">
                <li>HOME</li>
                <li>ABOUT</li>
                <li>SERVICE</li>
                <li>WORK</li>
                <li>ARTICLES</li>
                <li>
                    <div class="quote">
                        GET QUOTE
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped >
.container {
    display: flex;
    justify-content: space-around;
    height: 10vh;
    object-fit: cover;
    width: 100%;
}


.container-options {
    display: flex;
    align-items: center;
}

.options {
    display: flex;
    justify-content: space-around;
    list-style: none;
    align-items: center;
}

.quote {
    display: flex;
    align-items: center;
    background-color: #fed03d;
    padding: 20px;
    height: 100%;
}

li,
.logo {
    margin: 5px 20px;
    display: flex;
    align-items: center;
}

li:hover {
    color: rgb(207, 207, 57);
}
</style>