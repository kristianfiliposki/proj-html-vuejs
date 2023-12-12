<script>
import AppHeader from "./components/AppHeader.vue"
import AppJambo from "./components/AppJambo.vue"
import AppMain from "./components/AppMain.vue"
import { store } from "./store.js" //state management

export default {
	components: {
		AppHeader,
		AppJambo,
		AppMain,
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
		<AppMain />
	</main>
</template>

<style lang="scss"></style>

<style scoped></style>