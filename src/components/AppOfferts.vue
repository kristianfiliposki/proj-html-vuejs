<script>
export default {
    data() {
        return {
            cards: [
                {
                    logo: `<i class="fa-solid fa-building"></i>`,
                    name: "Buildings",
                    p: "Quis autem vel eum iure reprederit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum."
                },
                {
                    logo: `<i class="fa-solid fa-building"></i>`,
                    name: "Renovate",
                    p: "Quis autem vel eum iure reprederit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum."

                },
                {
                    logo: `<i class="fa-solid fa-building"></i>`,
                    name: "Construct",
                    p: "Quis autem vel eum iure reprederit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum."

                },
                {
                    logo: `<i class="fa-solid fa-building"></i>`,
                    name: "Exclusive",
                    p: "Quis autem vel eum iure reprederit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum."

                },
            ]
        }
    }
}
</script>
<template>
    <div class="container">
        <div class="info">
            <h2>Specialists In Modern Construction</h2>
            <hr>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna
                aliqua ut enim ad minim veniam.
            </p>
        </div>
        <div class="container-cards">
            <div v-for="card in cards" class="cards">
                <div class="logo-box">
                    <div class="logo">
                        <i class="fa-solid fa-building"></i>
                    </div>
                </div>
                <div class="name">
                    {{ card.name }}
                </div>
                <div class="p">
                    {{ card.p }}
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.info {
    width: 45%;
}

.container-cards {
    display: flex;
}

.cards {
    background: #f5f5f5;
    width: 220px;
    height: 300px;
    border-radius: 11px;
    margin: 10px 20px;
}


.logo-box {
    display: flex;
    justify-content: center;
}

.logo,
.name,
.p {
    margin: 10px;
    text-align: center;

}

.logo,
.p {
    color: grey;
}

.logo,
.name {
    font-size: 32px;
}

.logo {
    text-align: center;
    border: 1px solid grey;
    border-radius: 80%;
    width: 20%;
    padding: 18px;
}

h2 {
    text-align: center;
    font-size: 2em;
}

hr {
    width: 25%;
    height: 1%;
    background-color: #fed03d;
    border-radius: 22px;
}

p {
    text-align: center;
    font-size: 1rem;
}
</style>