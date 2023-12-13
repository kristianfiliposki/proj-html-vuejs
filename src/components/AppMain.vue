<script>
import { store } from "../store.js" //state management
import AddProject from "./AppAddproject.vue";
import AppOfferts from "./AppOfferts.vue";
export default {
    name: "AppMain",
    components: {
        AddProject,
        AppOfferts,
    },

    data() {
        return {
            store,
        }
    }
}
</script>
<template>
    <AddProject />
    <AppOfferts />
</template>
<style></style>

