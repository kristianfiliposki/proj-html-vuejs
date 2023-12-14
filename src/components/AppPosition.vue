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
        <!-- box -->
        <div class="box">
            <h2>Our Home Owners Say</h2>
            <hr>
            <p class="description">“Many novice real estate investors soon quit the profession and invest. When you
                invest in real estate, you often see a side of humanity that stocks, bonds, mutual funds, and saving
                money shelter you from.”
            </p>
            <!-- wrapper card -->
            <div class="wrapper-card">
                <div class="card" v-for="element in store.news">
                    <!-- img-wrapper -->
                    <div class="img-wrapper">
                        <!-- img -->
                        <img :src="element.img" alt="">
                    </div>
                    <!-- title card -->
                    <h3>{{ element.title }}</h3>
                    <!-- date card -->
                    <p class="date">{{ element.date }}</p>
                    <hr>
                    <!-- description card -->
                    <p class="description">
                        {{ element.p }}
                    </p>
                </div>
            </div>
            <!-- wrapper card -->


            <!-- add new element -->
            <div class="plus-element">
                <hr>
                <div>View all project</div>
                <hr>
            </div>
            <!-- add new element -->
        </div>
    </div>
</template>
<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #f5f5f5;
}

.card {
    width: calc((100% / 3) - 20px);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 20px;
    background-color: white;
}

.wrapper-card {
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 2.5em 0;

}

.img-wrapper,
.img-wrapper img {
    width: 100%;
}

.card hr {
    background-color: grey;
    width: 90%;
}

.plus-element {
    font-size: 1.3em;
    margin: 1.5em;
}

.plus-element hr {
    background-color: white;
    width: 35vh;
    margin: auto 70px;
}

.date,
.h3 {
    margin-top: 2em;
    text-align: start;
}

.card h3,
.card hr,
.card p {
    width: 90%;
}

.box {
    width: 85%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}


hr {
    background-color: #fed03D;
    height: 2px;
    border: none;
    width: 40%;
}

p {
    color: grey;
    width: 55%;
}

h2,
hr,
p,
h4 {
    text-align: center;
}

.plus-element {
    display: flex;
}
</style>