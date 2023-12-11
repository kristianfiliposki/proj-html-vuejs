<script>
import AppHeader from "./components/AppHeader.vue"
import AppJambo from "./components/AppJambo.vue"
import { store } from "./store.js" //state management

export default {
	components: {
		AppHeader,
		AppJambo,
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
	<main>
		<AppHeader />
		<AppJambo />
	</main>
</template>

<style >
* {
	font-family: sans-serif;
}
</style>

<style scoped></style>