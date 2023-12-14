<script>
import { store } from '../store';

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

export default {
    data() {
        return {
            store,
        }
    }
}
</script>
<template>
    <div class="flex">
        <div class="box">
            <h2>Trusted Partners</h2>
            <hr>
            <p class="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
            <div class="carosello">

                <!-- Slider main container -->
                <div class="swiper">
                    <!-- Additional required wrapper -->
                    <div class="swiper-wrapper">
                        <!-- Slides -->
                        <div class="swiper-slide"><img src="/public/construction/images/home-logo1-219096700-320x202.png"
                                alt="">
                        </div>
                        <div class="swiper-slide">
                            <img src="/proj-html-vuejs/public/construction/images/home-logo2-219096700-320x202.png" alt="">
                        </div>
                        <div class="swiper-slide">
                            <img src="/proj-html-vuejs/public/construction/images/home-logo9-219096700-320x202.png" alt="">
                        </div>
                        <div class="swiper-slide">
                            <img src="/proj-html-vuejs/public/construction/images/home-logo10-219096700-320x202.png" alt="">
                        </div>
                        <div class="swiper-slide">
                            <img src="/proj-html-vuejs/public/construction/images/home-logo11-219096700-320x202.png" alt="">
                        </div>

                        ...
                    </div>
                    <!-- If we need pagination -->
                    <div class="swiper-pagination"></div>

                    <!-- If we need navigation buttons -->
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>

                    <!-- If we need scrollbar -->
                    <div class="swiper-scrollbar"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.carosello {
    margin: 1em;
}

.flex {
    display: flex;
    justify-content: center;
}

.description {
    text-align: center;
}

.box {
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

hr {
    width: 28%;
    height: 2px;
    background-color: #fed03d;
    border: none;

}

p {
    color: grey;
}
</style>