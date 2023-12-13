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
    <div class="container">
        <div class="box">
            <h2>Our Home Owners Say</h2>
            <hr>
            <p class="description">“Many novice real estate investors soon quit the profession and invest. When you
                invest in real estate, you often see a side of humanity that stocks, bonds, mutual funds, and saving
                money shelter you from.”
            </p>
            <div>

            </div>
        </div>
    </div>
</template>
<style scoped>
.container {
    display: flex;
    justify-content: center;
}

.box,
hr {
    width: 50%;
}

hr {
    background-color: #fed03D;
    height: 2px;
    border: none;
}

p {
    color: grey;
}

h2,
hr,
p,
h4 {
    text-align: center;
}
</style>