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
    <div class="flex">
        <div class="box">
            <h2>Trusted Partners</h2>
            <hr>
            <p class="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
            <div class="SWIPER">SWIPER</div>
        </div>
    </div>
</template>
<style scoped>
.SWIPER {
    font-size: 6em;
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