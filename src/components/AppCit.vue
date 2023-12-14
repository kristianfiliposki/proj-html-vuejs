<script>
import { store } from '../store';
export default {
    name: "Cit",
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
        <!-- bordo angolare superiore -->
        <div class="rounded-top"></div>
        <!-- img-container -->
        <div class="img">
            <div class="box">
                <h2>Our Home Owners Say</h2>
                <hr>
                <div class="testiomonial">
                    <img :src="store.Testimonial" alt="">
                </div>
                <p class="description">“Many novice real estate investors soon quit the profession and invest. When you
                    invest in real estate, you often see a side of humanity that stocks, bonds, mutual funds, and saving
                    money shelter you from.”
                </p>
                <h4>JOHN DOE • PROPERTY INVESTOR</h4>
                <div class="buttons">
                    <button></button>
                    <button></button>
                </div>
            </div>
        </div>
        <!-- img-container -->

        <!-- bordo angolare superiore -->
        <div class="rounded-buttom"></div>
    </div>
</template>
<style scoped>
hr {
    width: 30%;
    background-color: #fed03d;
    height: 2px;
}

h2 {
    text-align: center;
}

.box {
    width: 50%;
    color: white;
}

.testiomonial {
    display: flex;
    justify-content: center;
}

.testiomonial img {
    border-radius: 50%;
}

.container {
    position: relative;
}

.rounded-top {
    position: absolute;
    background-color: #f5f5f5;
    width: 100%;
    height: 80px;
    border-radius: 0 0 90% 90%;
    z-index: 99;
}

.img {
    background: url("/public/construction/images/home-parallax-144609983.jpg");
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
}

.rounded-buttom {
    position: absolute;
    bottom: 0;
    background-color: #f5f5f5;
    width: 100%;
    height: 80px;
    border-radius: 90% 90% 0 0;
}

h4 {
    text-align: center;
    font-size: 1.5em;
}

.buttons {
    display: flex;
    justify-content: center;
}

.buttons button {
    display: block;
    margin-left: 19px;
    height: 20px;
    width: 20px;
    border-radius: 10px;
    border: none;
}
</style>