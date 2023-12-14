<script>
import AppHeader from "./components/AppHeader.vue";
import AppJambo from "./components/AppJambo.vue";
import AddElements from "./components/AppElements.vue";
import AppOfferts from "./components/AppOfferts.vue";
import AppStats from "./components/AppStats.vue";
import AppRecentWorks from "./components/AppRecentWorks.vue";
import AppServices from "./components/AppServices.vue";
import AppCit from "./components/AppCit.vue";
import AppPosition from "./components/AppPosition.vue";
import AppCarosello from "./components/AppCarosello.vue";
import AppInspiring from "./components/AppInspiring.vue";
import AppFooter from "./components/AppFooter.vue";
import { store } from "./store.js" //state management

export default {
	components: {
		AppHeader,
		AppJambo,
		AddElements,
		AppOfferts,
		AppStats,
		AppRecentWorks,
		AppServices,
		AppCit,
		AppPosition,
		AppCarosello,
		AppInspiring,
		AppFooter,
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
	<!-- header -->
	<AppHeader />
	<!-- header -->

	<!-- main -->
	<AppJambo />
	<AddElements />
	<AppOfferts />
	<AppStats />
	<AppRecentWorks />
	<AppServices />
	<AppCit />
	<AppPosition />
	<AppCarosello />
	<AppInspiring />
	<!-- main -->

	<!-- footer -->
	<AppFooter />
	<!-- footer -->
</template>

<style >
* {
	font-family: sans-serif;
}
</style>

<style scoped></style>