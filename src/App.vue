<script>
import AppHeader from "./components/AppHeader.vue"
import AppJambo from "./components/AppJambo.vue"
import AppAppAddProject from "./components/AppAppAddProject.vue"
import { store } from "./store.js" //state management

export default {
	components: {
		AppHeader,
		AppJambo,
		AppAppAddProject
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
		<AppAppAddProject />

	</main>
</template>

<style lang="scss"></style>

<style scoped></style>