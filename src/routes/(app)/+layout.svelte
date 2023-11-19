<script lang="ts">
	import Sidebar from '$lib/components/Sidebar.svelte';
	import Header from '$lib/components/Header.svelte';
	import Page from '$lib/components/Page.svelte';
	import { GUEST_USER } from '$lib/data/auth';
	import type { LoggedUser } from '$lib/typing/auth';

	const user: LoggedUser = GUEST_USER;
</script>

<div class="app">
	<Sidebar user={user} />
	<Header />
	<Page>
		<slot></slot>
	</Page>
</div>

<style>
	div.app {
		display: grid;
		grid-template-areas:
			"header header"
			"sidebar page";
		grid-template-columns: auto 1fr;
		grid-template-rows: auto 1fr;
		gap: 1rem;
	}
</style>
