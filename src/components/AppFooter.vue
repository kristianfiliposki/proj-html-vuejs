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
    <div class="container">
        <div class="WeAre">
            <div class="box-logo"><img src="/public/construction/images/footer-logo.png" alt=""></div>
            <p>We are specialists in the construction of unique and exclusive properties. Our work inspires. We pride
                ourselves
                on delivering outstanding quality and design for leading clients across the world.
            </p>
            <div class="box-button">
                <a href="">
                    <div class="GET">LEARN MORE</div>
                </a>
            </div>
        </div>
        <div class="tweets">
            <h3>LATEST TWEETS</h3>
            <p>Avada 7.0 Beta 2 is out & we cannot wait to release 7.0 into the wild soon. Column flexibility, layout
                flexibility, responsive flexibility, menus, headers, workflow tools, and so much more to be excited about.
            </p>
        </div>
        <div class="contact">
            <h3>CONTACT US TODAY</h3>
            <div>
                <p>Corporate Location
                    1600 Amphitheatre Parkway
                    London WC1 1BA
                </p>
            </div>
            <div>
                <p>Corporate Location
                    1600 Amphitheatre Parkway
                    London WC1 1BA
                </p>
            </div>
            <div>
                <p>Corporate Location
                    1600 Amphitheatre Parkway
                    London WC1 1BA
                </p>
            </div>
            <div>
                <p>Corporate Location
                    1600 Amphitheatre Parkway
                    London WC1 1BA
                </p>
            </div>
        </div>
        <div class="location">
            <img src="/public/construction/images/construction_map_pin.png-Notti" alt="">
        </div>
    </div>
    <div class="rights">
        <div>
            <p>©COPYRIGHT 2012 - 2023 | AVADA THEME BY THEMEFUSION | ALL RIGHTS RESERVED | POWERED BY WORDPRESS</p>
        </div>
        <div>
            <div>logo</div>
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