<script lang="ts">
	import type { Route } from "$lib/typing/constants";

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