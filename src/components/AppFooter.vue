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
    <!-- container footer-->
    <div class="container">

        <!-- this element explain we are -->
        <div class="WeAre">
            <!-- img logo -->
            <div class="box-logo"><img src="/public/construction/images/footer-logo.png" alt=""></div>
            <!-- paragraph -->
            <p>We are specialists in the construction of unique and exclusive properties. Our work inspires. We pride
                ourselves
                on delivering outstanding quality and design for leading clients across the world.
            </p>
            <!-- Button to Learn more -->
            <div class="box-button">
                <a href="">
                    <div class="GET">LEARN MORE</div>
                </a>
            </div>
        </div>
        <!-- this element explain we are -->

        <!-- TWEETS -->
        <div class="posts">
            <!-- title -->
            <h3>LATEST TWEETS</h3>
            <!-- posts -->
            <div class="tweets">
                <!-- posts -->
                <div class="post" v-for="post in store.messages">
                    <div class="header-post">
                        <div class="img-profil">
                            <img src="/public/construction/images/3a74ce3d0532b7773b174c45ca3bd05a_bigger.png" alt="">
                        </div>
                        <div class="who">
                            <div class="name">{{ post.name }}</div>
                            <div class="mail">{{ post.mail }}</div>
                        </div>
                        <div class="date"> {{ post.data }}</div>
                    </div>
                    <div class="main-post">
                        <p class="message">{{ post.message }}</p>
                    </div>
                </div>
            </div>
            <!-- posts -->
        </div>
        <!-- TWEETS -->



        <!-- contacts -->
        <div class="contact">
            <!-- title -->
            <h3>CONTACT US TODAY</h3>
            <!-- info -->
            <div v-for=" in 4">
                <p>Corporate Location
                    1600 Amphitheatre Parkway
                    London WC1 1BA
                </p>
            </div>
        </div>
        <!-- maps -->
        <div class="location">
            <!-- locations -->
            <img src="/public/construction/images/construction_map_pin.png-Notti" alt="">
        </div>

    </div>
    <!-- container footer-->


    <!-- diritti -->
    <div class="rights">
        <!-- ©COPYRIGHT -->
        <div>
            <p>©COPYRIGHT 2012 - 2023 | AVADA THEME BY THEMEFUSION | ALL RIGHTS RESERVED | POWERED BY @KRISTIAN FILIPOSKI
            </p>
        </div>
        <!-- ©COPYRIGHT -->

        <!-- social -->
        <div class="social">
            <div><font-awesome-icon icon="fa-brands fa-facebook" /></div>
            <div><font-awesome-icon icon="fa-brands fa-twitter" /></div>
            <div><font-awesome-icon icon="fa-brands fa-youtube" /></div>
            <div><font-awesome-icon icon="fa-brands fa-instagram" /></div>
        </div>
        <!-- social -->

    </div>
</template>
<style scoped>
.container {
    height: 70vh;
    background-color: #1f1f1f;
    display: flex;
    align-content: center;
    justify-content: space-around;
    color: white;
    flex-wrap: wrap;
    padding: 3em;

}

.post {
    width: 100%;
}

.header-post {
    display: flex;
    width: 100%;
}

.img-profil {
    width: 10%;
    height: 10%;
}

.img-profil img {
    width: 100%;
    height: 100%;
}

.who div {
    margin: 0 10px;
}

.main-post div {
    color: white;
    line-height: normal;
}

.WeAre {
    width: 20%;
}

.tweets {
    width: 275px;
    height: 430px;
    overflow-y: auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.contact {
    width: 20%;
}

.location {
    width: 25%;
}

.location img {
    width: 100%;
}

.box-logo {
    width: 75%;
    height: 15%;
}

.box-logo img {
    width: 100%;
    height: 100%;
}

.social {
    display: flex;
    justify-content: center;
    align-items: center;
}

.social div {
    padding-right: 0.7em;
    font-size: 1.5em;
}

p {
    width: 80%;
    line-height: 1.8em;
    color: grey;
}

.GET {
    background-color: #fed03d;
    color: black;
    padding: 1em;
    width: 40%;
}

a {
    display: block;
    text-decoration: none;
    height: 20%;
}

h3 {
    color: #fed03d;
}

.rights {
    background-color: black;
    color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.rights p {
    font-size: 0.7rem;
    width: 100%;
}
</style>