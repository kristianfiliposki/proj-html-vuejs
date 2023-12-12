<script>
import AddProject from "./AppAddProject.vue"
import AppOfferts from "./AppOfferts.vue";
export default {
    name: "AppMain",
    components: {
        AddProject,
        AppOfferts,
    },

    data() {
        return {
        }
    }
}
</script>
<template>
    <AddProject />
    <AppOfferts />
</template>
<style></style>