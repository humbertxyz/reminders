
<script lang="ts">
	import Anchor from '$lib/ui/Anchor.svelte';
	import type { LoggedUser } from '$lib/typing/auth';

	export let user: LoggedUser | null = null;

	import { APP_ROUTES } from '$lib/data/constants';
</script>

<aside>
	<section>
		{#if user }
			<span>Logged in as {user.name}</span>
		{:else}
			<span>Not logged in</span>
		{/if}
	</section>

	<section>
		{#each APP_ROUTES as route}
			<Anchor {route} />
		{/each}
	</section>

	<section class="sidebar-section">
		{#if user }
			<Anchor route={{ path: `/settings/${user.uuid}`, label: 'Edit settings' }} />
		{:else}
			<span>Not logged in</span>
		{/if}
	</section>
</aside>

<style>
	aside {
		--sidebar: 20vw;

		width: var(--sidebar);
		padding: 1rem;
		background-color: var(--darky);
		backdrop-filter: blur(15px);
		grid-area: sidebar;
		display: grid;
		grid-template-rows: auto 1fr auto;
		gap: 2rem;
	}

	section:nth-child(2) {
		display: flex;
		flex-direction: column;
	}
</style>
