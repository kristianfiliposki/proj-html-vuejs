<script>
import { store } from '../store';
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
        <!-- box-ansewer -->
        <div class="box-answer">
            <!-- title -->
            <h2>BUILDING INSPIRING SPACES</h2>
            <hr>
            <!-- paragraph -->
            <p class="description">Vivamus Sed Consectetur Tellus Dolor Sit Amet, Consectetur Adipiscing Lorem Elit Sadip
                Ipsum
                Ets
                Ficilis Uns.
            </p>
            <!-- paragraph -->

        </div>
        <!-- box-ansewer -->

        <!-- button -->
        <div class="box-button">
            <a href="">
                <div class="GET">GET A QUOTE TODAY</div>
            </a>
            <p>Only takes a few seconds!</p>
        </div>
        <!-- button -->

    </div>
</template>
<style scoped>
.container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 50vh;
    background: url("/public/construction/images/about-call-to-action-57862405.jpg");
    background-position: bottom;
    background-size: cover;
    color: white;
    font-size: 1.2em;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.box-answer {
    width: 50%;
}

hr {
    width: 45%;
    height: 2px;
    border: none;
    text-align: start;
    margin: 0;
    background-color: #fed03d;

}

.GET {
    background-color: #fed03d;
    color: black;
    padding: 1em;
}

a {
    text-decoration: none;
}
</style>