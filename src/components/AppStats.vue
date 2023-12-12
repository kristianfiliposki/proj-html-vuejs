<script>
name: "AppStats";
export default {
    data() {
        return {
            stats: [
                {
                    logo: "",
                    numero: "3534",
                    name: "PLANNING APPLICATIONS",
                },
                {
                    logo: "",
                    numero: "896",
                    name: "COMPLETED PROJECTS",
                },
                {
                    logo: "",
                    numero: "172",
                    name: "TRAINED PROFESSIONALS",
                },
                {
                    logo: "",
                    numero: "19",
                    name: "INTERNATIONAL OFFICES",
                },

            ]
        }
    }
}
</script>
<template>
    <div class="container">
        <div class="rounded-top"></div>
        <div class="img">
            <div class="stats">
                <div class="stat" v-for="stat in stats">
                    <div>
                        <div class="box-logo">
                            <div class="logo">
                                <i class="fa-solid fa-building"></i>
                            </div>
                        </div>

                        <div class="number">
                            {{ stat.numero }}
                        </div>
                        <div class="name">
                            {{ stat.name }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="rounded-buttom"></div>
    </div>
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