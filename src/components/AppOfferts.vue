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
    <!-- CONTAINER -->
    <div class="container">
        <!-- INFO -->
        <div class="info">
            <!-- TITLE -->
            <h2>Specialists In Modern Construction</h2>
            <hr>
            <!-- DESCRIPTION -->
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna
                aliqua ut enim ad minim veniam.
            </p>
        </div>
        <!-- Container CARDS -->
        <div class="container-cards">
            <!-- Card -->
            <div v-for="card in store.cards" class="cards">
                <!-- logo box  -->
                <div class="logo-box">
                    <!-- logo -->
                    <div class="logo">
                        <font-awesome-icon :icon="card.logo" />
                    </div>
                </div>
                <!-- name -->
                <div class="name">
                    {{ card.name }}
                </div>
                <!-- description -->
                <div class="p">
                    {{ card.p }}
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.info {
    width: 45%;
}

.container-cards {
    display: flex;
}

.cards {
    background: #f5f5f5;
    width: 270px;
    height: 320px;
    border-radius: 11px;
    margin: 10px 20px;
}


.logo-box {
    display: flex;
    justify-content: center;
}

.logo,
.name,
.p {
    margin: 10px;
    text-align: center;

}

.logo,
.p {
    color: grey;
}

.logo,
.name {
    font-size: 32px;
}

.logo {
    text-align: center;
    border: 1px solid grey;
    border-radius: 80%;
    width: 20%;
    padding: 18px;
}

h2 {
    text-align: center;
    font-size: 2em;
}

hr {
    width: 25%;
    height: 1%;
    background-color: #fed03d;
    border-radius: 22px;
}

p {
    text-align: center;
    font-size: 1rem;
}
</style>

