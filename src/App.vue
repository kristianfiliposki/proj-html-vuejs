<script>
import AppHeader from "./components/AppHeader.vue"
import AppJambo from "./components/AppJambo.vue"
import AppMain from "./components/AppMain.vue"
import AppStats from "./components/AppStats.vue"
import AppRecentWorks from "./components/AppRecentWorks.vue"
import AppServices from "./components/AppServices.vue"
import AppCit from "./components/AppCit.vue"
import AppPosition from "./components/AppPosition.vue"
import { store } from "./store.js" //state management

export default {
	components: {
		AppHeader,
		AppJambo,
		AppMain,
		AppStats,
		AppRecentWorks,
		AppServices,
		AppCit,
		AppPosition,


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
	<AppRecentWorks />
	<AppServices />
	<AppCit />
	<AppPosition />
</template>

<style >
* {
	font-family: sans-serif;
}
</style>

<style scoped></style>