<script>
import { store } from "../store.js" //state management

export default {
    name: "AddProject",
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <!-- i add a new component to add new feature for create a sort of "nuovo preventivo" -->
    <div>Do You Have A Construction Project We Can Help With?</div>
</template>

<style scoped>
div {
    height: 10vh;
    background-color: #fed03d;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.4em;
}
</style>