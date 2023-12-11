<script>
export default {
    name: "Jambo",
    data() {
        return {

        }
    }
}
</script>
<template>
    <div class="container">
        <div>
            <h1>BUILDING INSPIRING SPACES</h1>
            <div class="slogan">We Build Inspiring Residential & Commercial Spaces</div>
        </div>
    </div>
</template>
<style scoped>
.container {
    background: url("/public/construction/images/home-slider-62528242.jpg");
    height: 90vh;
    background-size: cover;
    width: 100%;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-weight: 800;
    font-size: 2.4em;
    color: white;
}

.slogan {
    color: #fed03d;
    text-align: center;
    font-size: 1em;
    font-weight: 200;
}

img {
    width: 100%;
    height: 100%;
    object-position: left;
}
</style>