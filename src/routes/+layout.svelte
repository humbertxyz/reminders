<style>
	:global(:root) {
		--white: #FFFFFF;
		--light: #DDDDDD;
		--darky: #333333;
		--dark: #222222;
		--darker: #111111;
		--black: #000000;

		--primary-light: #4B9CD3;
		--primary-main: #1A73E8;
		--primary-dark: #103C60;

		--success-light: #6DDF6D;
		--success-main: #28A745;
		--success-dark: #165B33;

		--warning-light: #FFC107;
		--warning-main: #FFA000;
		--warning-dark: #C67C00;

		--danger-light: #E57373;
		--danger-main: #DC3545;
		--danger-dark: #A71D2A;

		--ff: Roboto, system-ui, Helvetica, Verdana, Arial, "Times New Roman";
		--fs: 12px;
	}

	:global(*, *::before, *::after) {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	:global(html) {
		width: 100%;
		height: 100%;
		color: var(--light);
		background-color: var(--black);
		font-family: var(--ff);
		font-size: var(--fs);
	}

	:global(body) {
		width: 100%;
		height: 100%;
		background-color: var(--dark);
		display: grid;
		grid-template-areas:
			"sidebar header"
			"sidebar page";
		grid-template-columns: auto 1fr;
		grid-template-rows: auto 1fr;
		gap: 1rem;
	}
</style>

<script>
	import Sidebar from '$lib/components/Sidebar.svelte';
	import Header from '$lib/components/Header.svelte';
	import Page from '$lib/components/Page.svelte';
	let user = 'John Doe';
</script>

<Sidebar user={user} />
<Header />
<Page>
	<slot></slot>
</Page>
