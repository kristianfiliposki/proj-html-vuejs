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

        <!-- tweets -->
        <div class="tweets">
            <!-- title -->
            <h3>LATEST TWEETS</h3>
            <!-- paragraph -->
            <p>Avada 7.0 Beta 2 is out & we cannot wait to release 7.0 into the wild soon. Column flexibility, layout
                flexibility, responsive flexibility, menus, headers, workflow tools, and so much more to be excited about.
            </p>
        </div>
        <!-- tweets -->


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

.WeAre {
    width: 20%;
}

.tweets {
    width: 20%;
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
    width: 50%;
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