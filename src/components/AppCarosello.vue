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
            <h2>Our Home Owners Say</h2>
            <hr>
            <p class="description">“Many novice real estate investors soon quit the profession and invest. When you
                invest in real estate, you often see a side of humanity that stocks, bonds, mutual funds, and saving
                money shelter you from.”
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