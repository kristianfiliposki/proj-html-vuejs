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
    <!-- Container -->
    <div class="container">
        <h2>Our Core Values</h2>
        <hr>
        <!-- description -->
        <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
        </p>
        <!-- box card -->
        <div class="box-card">
            <div v-for="serivice in store.services" class="card">
                <!-- logo -->
                <div class="element">
                    <div><font-awesome-icon :icon="serivice.logo" :class="serivice.class" /></div>
                </div>
                <!-- title -->
                <div class="element">
                    <h4>{{ serivice.title }}</h4>
                </div>
                <!-- hr -->
                <div class="separate element"></div>

                <!-- description paragraph -->
                <div class="element">
                    <p>{{ serivice.paragraph }}</p>
                </div>
            </div>
        </div>
        <!-- box card -->
    </div>
    <!-- Container -->
</template>

<style scoped>
.house,
.setting,
.users,
.light {
    font-size: 4em;
    padding: 0.3em;
    background-color: #21a6b5;
    color: white;
    border-radius: 50%;
    width: 65%;
    aspect-ratio: 1;
}

.house {
    background-color: #21a6b5;
}

.setting {
    background-color: #517ad2;
}

.users {
    background-color: #FE813E;
}

.light {
    background-color: #84CB01;
}



.card {
    margin: 2em;
}

.element {
    display: flex;
    justify-content: center;
}

.description {
    width: 50%;
}

h2 {
    font-weight: 800;
    font-size: 2.2em;
}

.box-card {
    margin-top: 2em;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
}



.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #f5f5f5;
    margin-top: 4em;
}

h4 {
    width: 50%;
    text-align: center;
}


.separate {
    margin: auto;
    width: 10%;
    background-color: grey;
    height: 2px;
    border-radius: 20px;
    border: none;
}

hr {
    width: 30%;
    background-color: #FED03D;
    height: 2px;
    border-radius: 20px;
    border: none;

}

p {
    width: 100%;
    color: grey;
    text-align: center;
}
</style>