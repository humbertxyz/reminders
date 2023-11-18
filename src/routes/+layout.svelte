<script>
	import Sidebar from '$lib/components/Sidebar.svelte';
	let user = 'John Doe';
</script>

<Sidebar user={user} />
<main>
	<slot></slot>
</main>

<style>
	:global(:root) {
		--content-min-mobile: 400px;
		--content-mobile: 100%;
		--content-min-desktop: 768px;
		--content-max-desktop: 992px;
		--content-desktop: 80vw;
		--sidebar-mobile: 60vw;
		--sidebar-desktop: 25vw;

		--sidebar-z-index: 999;

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

		--full-w: 100%;
		--full-h: 100%;
		--space-sm-px: 3px;
		--space-md-px: 8px;

		/* position */

		/* typography */
		--ff: Roboto, system-ui, Helvetica, Verdana, Arial, "Times New Roman";
		--fs: 12px;

		/* visual format */

		/* flex */

		/* grid */

		/* other */
	}

	:global(*, *::before, *::after) {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	:global(html) {
		width: var(--full-w);
		height: var(--full-h);
		color: var(--light);
		background-color: var(--darker);
		font-family: var(--ff);
		font-size: var(--fs);
	}

	:global(body) {
		width: var(--full-w);
		height: var(--full-h);
		background-color: var(--dark);
	}
</style>