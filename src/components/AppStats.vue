<script>
name: "AppStats";
import { store } from "../store.js" //state management
export default {
    data() {
        return {
            store,
        }
    },
    methods: {

    },
    /* I TRY TO INCRESE THE STATISTIC NUMBERS */
    /*     mounted() {
            store.stats[0].numero.transition({
                duration: 1000,
                easing: 'ease-in-out',
                to: 10
            })
        } */
}
</script>
<template>
    <!-- container -->
    <div class="container">
        <!-- bordo angolare superiore -->
        <div class="rounded-top"></div>
        <!-- background box -->
        <div class="img">
            <!-- statistical card -->
            <div class="stats">
                <!-- card -->
                <div class="stat" v-for="stat in store.stats">
                    <!-- wrapper -->
                    <div>
                        <!-- logo box -->
                        <div class="box-logo">
                            <!-- logo -->
                            <div class="logo">
                                <font-awesome-icon :icon="stat.logo" />
                            </div>
                        </div>
                        <!-- logo box -->

                        <!-- card number -->
                        <div class="number">
                            {{ stat.numero }}
                        </div>
                        <!-- card name -->
                        <div class="name">
                            {{ stat.name }}
                        </div>
                    </div>
                    <!-- wrapper -->
                </div>
                <!-- card -->
            </div>
        </div>
        <!-- background box -->
        <div class="rounded-buttom"></div>
        <!-- bordo angolare inferiore -->
    </div>
    <!-- container -->
</template>


<style scoped>
.stats {
    display: flex;
    height: 350px;
}

.stat {
    text-align: center;
    margin: 22px;
    display: flex;
    align-items: center;
    color: #fed03D;
}

.box-logo {
    display: flex;
    justify-content: center;

}

.logo {
    text-align: center;
    padding: 20px;
    font-size: 7em;
    text-align: center;
}

.name {
    color: white;
}

.number {
    font-size: 3rem;
}

.img {
    background-image: url("/public/construction/images/home-244125289.jpg");
    background-position: bottom;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
}

.container {
    position: relative;
}

.rounded-top {
    position: absolute;
    background-color: white;
    width: 100%;
    height: 80px;
    border-radius: 0 0 90% 90%;
    z-index: 99;
}


img {
    height: 100%;
    width: 100%;
}


.rounded-buttom {
    position: absolute;
    bottom: 0;
    background-color: white;
    width: 100%;
    height: 80px;
    border-radius: 90% 90% 0 0;
}
</style>