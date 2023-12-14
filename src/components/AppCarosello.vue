<script>
import { store } from '../store';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import '../style.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

export default {
    data() {
        return {
            store,
        }
    },

    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Pagination],
        };

    }
}



</script>
<template>
    <!-- flex container -->
    <div class="flex">
        <!-- box -->
        <div class="box">
            <!-- h2 -->
            <h2>Trusted Partners</h2>
            <hr>
            <!-- paragrafo -->
            <p class="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
            <!-- carosello error -->
            <div class="carosello">

                <swiper :pagination="true" :modules="modules" class="mySwiper">
                    <swiper-slide>
                        <img src="/proj-html-vuejs/public/construction/images/home-logo1-219096700-320x202.png" alt="">
                    </swiper-slide>
                    <swiper-slide>
                        <img src="/proj-html-vuejs/public/construction/images/home-logo1-219096700-320x202.png" alt="">
                    </swiper-slide>
                    <swiper-slide>
                        <img src="/proj-html-vuejs/public/construction/images/home-logo1-219096700-320x202.png" alt="">
                    </swiper-slide>

                </swiper>
            </div>
            <!-- carosello error -->
        </div>
    </div>
</template>
<style scoped>
.carosello {
    margin: 1em;
    width: 99vw;
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