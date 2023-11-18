
<script>
	import Anchor from '$lib/components/Anchor.svelte';
	export let user = '';
	const routes = [
		{
			name: 'Home',
			href: '/'
		},
		{
			name: 'Accounts',
			href: '/accounts'
		},
		{
			name: 'Subscriptions',
			href: '/subscriptions'
		}
	];

</script>

<style>
	aside {
		--sidebar: 20vw;

		width: var(--sidebar);
		padding: 1rem;
		background-color: var(--darky);
		display: grid;
		grid-template-rows: auto 1fr auto;
		gap: 2rem;
		backdrop-filter: blur(15px);
		grid-area: sidebar;
	}


	section:nth-child(2) {
		display: flex;
		flex-direction: column;
	}


</style>

<aside>
	<section>
		{#if user}
			<span>Logged in as {user}</span>
		{/if}
	</section>
	
	<section>
		{#each routes as route}
			<Anchor {route} />
		{/each}
	</section>
	
	<section class="sidebar-section">
		<span>Settings</span>
	</section>
</aside>