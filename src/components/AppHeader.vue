<script>
import { store } from "../store.js" //state management

export default {
    name: "Header",
    data() {
        return {
            store,
        }
    },
    methods: {
    },
    mounted() {
    }
}
</script>

<template>
    <div class="fixed">
        <!--container  -->
        <div class="container">
            <!-- logo -->
            <div class="logo"><img src="/public/construction/images/construction_logo.png" alt=""></div>
            <!-- options -->
            <div class="container-options">
                <ul class="options">
                    <a href="">
                        <li>HOME</li>
                    </a>
                    <a href="">
                        <li>ABOUT</li>
                    </a>
                    <a href="">
                        <li>SERVICE</li>
                    </a>
                    <a href="">
                        <li>WORK</li>
                    </a>
                    <a href="">
                        <li>ARTICLES</li>
                    </a>
                    <a href="">
                        <li>
                            <div class="quote">
                                GET QUOTE
                            </div>
                        </li>
                    </a>
                </ul>
            </div>
        </div>
    </div>
</template>

<style>
.fixed {
    background-color: white;
    position: fixed;
    width: 100%;
    z-index: 999;

}
</style>

<style scoped >
a {
    text-decoration: none;
    color: black;
}

.container {
    display: flex;
    justify-content: space-between;
    height: 15vh;
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

.quote:hover {
    color: white;
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