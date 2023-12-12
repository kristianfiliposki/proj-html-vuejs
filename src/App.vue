<script>
import AppHeader from "./components/AppHeader.vue"
import AppJambo from "./components/AppJambo.vue"
import AppMain from "./components/AppMain.vue"
import AppStats from "./components/AppStats.vue"
import { store } from "./store.js" //state management

export default {
	components: {
		AppHeader,
		AppJambo,
		AppMain,
		AppStats,
	},
	data() {
		return {
			store
		}
	},
	mounted() {
	},
	methods: {
	}
}


</script>

<template>
	<AppHeader />
	<AppJambo />
	<AppMain />
	<AppStats />
</template>

<style ></style>

<style scoped></style>