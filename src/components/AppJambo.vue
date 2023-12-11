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
        <div class="buttons">
            <div class="left">EXPLORE RECENT WORK</div>
            <div class="right">GET A QUOTE TODAY</div>
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

h1 {
    margin: 0;
}

.slogan {
    width: 100%;
    color: #fed03d;
    text-align: center;
    font-size: 2rem;
    font-weight: 200;
}

.buttons {
    display: flex;
    font-size: 1.1rem;
}

.right {
    background-color: #fed03d;
    color: black;
}

.left {
    background-color: #333333;
}

.right,
.left {
    margin: 20px 20px;
    padding: 25px;
}
</style>