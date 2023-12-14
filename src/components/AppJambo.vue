<script>
import { store } from "../store.js" //state management
export default {
    name: "Jambo",
    data() {
        return {
            store,
        }
    }
}
</script>
<template>
    <!-- container -->
    <div class="container">
        <!-- TITLE E SLOGAN -->
        <div>
            <!-- TITLE -->
            <h1>BUILDING INSPIRING SPACES</h1>
            <!-- SLOGAN -->
            <div class="slogan">We Build Inspiring Residential & Commercial Spaces</div>
        </div>
        <!-- BUTTONS -->
        <div class="buttons">
            <!-- BUTTON 1 -->
            <a href="">
                <div class="left">EXPLORE RECENT WORK</div>
            </a>

            <!-- BUTTON 2 -->
            <a href="">
                <div class="right">GET A QUOTE TODAY</div>
            </a>

        </div>
    </div>
    <!-- container -->
</template>
<style scoped>
a {
    text-decoration: none;
    color: white;
}

.container {
    background: url("/public/construction/images/home-slider-62528242.jpg");
    height: 100vh;
    background-size: cover;
    width: 100%;
    background-position: top;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-weight: 800;
    font-size: 2.4em;
    color: white;
}

h1 {
    margin: 0;
}

.slogan {
    width: 100%;
    color: #fed03d;
    text-align: center;
    font-size: 2rem;
    font-weight: 200;
}

.buttons {
    display: flex;
    font-size: 1.1rem;
}

.right {
    background-color: #fed03d;
    color: black;
}

.left {
    background-color: #333333;
    color: white;
}

.left:hover {
    background-color: #fed03d;
    color: black;
}

.right:hover {
    background-color: #333333;
}

.left:hover {
    background-color: #fed03d;
}

.left:hover,
.right:hover {
    transition: 0.2s;
    color: white;
}

.right,
.left {
    margin: 20px 20px;
    padding: 25px;
}
</style>