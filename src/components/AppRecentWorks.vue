<script>
import { store } from "../store.js" //state management

export default {
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
        <!-- title -->
        <h2>Explore Recent Work</h2>
        <hr>
        <!-- description -->
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
        </p>
        <!-- picture box -->
        <div class="foto-box">
            <!-- picture  -->
            <div v-for="element in store.srcf" class="foto">
                <img :src="element" alt="">
            </div>
        </div>
        <!-- picture box -->

        <!-- ADD NEW ELEMENT -->
        <div class="plus-element">
            <hr>
            <div>View all project</div>
            <hr>
        </div>
        <!-- ADD NEW ELEMENT -->

    </div>
    <!-- container -->
</template>
<style scoped>
h2,
p {
    text-align: center;
}

.container {
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
}

.foto-box {
    display: flex;
    justify-content: center;
    align-content: center;

}

.foto {
    margin: 20px;
}

.plus-element {
    display: flex;
}

hr {
    width: 30%;
    background-color: #FED03D;
    height: 2px;
    border-radius: 20px;
    border: none;
}

img {
    width: 400px;
    height: 400px;
}
</style>