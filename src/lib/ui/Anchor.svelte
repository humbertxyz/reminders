<script lang="ts">
	import type { Route } from "$lib/data/constants.types";

	export let route: Route;
</script>

<a href={route.path}>{route.label}</a>

<style>
	a {
		color: inherit;
		text-decoration: none;
		cursor: pointer;
	}
</style>