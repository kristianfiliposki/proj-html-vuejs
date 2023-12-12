<script>
name: "AppStats";
export default {
    data() {
        return {

        }
    }
}
</script>
<template>
    <div class="container">
        <div class="rounded-top"></div>
        <div><img src="/public/construction/images/home-244125289.jpg" alt=""></div>
        <div class="rounded-buttom"></div>

    </div>
</template>
<style scoped>
.container {
    position: relative;
}

.rounded-top {
    position: absolute;
    background-color: white;
    width: 110%;
    height: 80px;
    border-radius: 0 0 90% 90%;
    z-index: 99;
}

div {
    height: 90vh;
}

img {
    height: 100%;
    width: 100%;
}


.rounded-buttom {
    position: absolute;
    bottom: 0;
    background-color: white;
    width: 110%;
    height: 80px;
    border-radius: 90% 90% 0 0;
    z-index: 99;
}
</style>