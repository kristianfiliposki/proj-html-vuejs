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
    <div class="container">
        <h2>Our Core Values</h2>
        <hr>
        <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
        </p>
        <div class="box-card">
            <div v-for="serivice in store.services" class="card">
                <div class="element">
                    <div>LOGO</div>
                </div>
                <div class="element">
                    <h4>{{ serivice.title }}</h4>
                </div>
                <div class="separate element"></div>

                <div class="element">
                    <p>{{ serivice.paragraph }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
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