<script lang="ts">
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';

	export let data;

	let { supabase, session } = data;
	$: ({ supabase, session } = data);

	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange((event, _session) => {
			if (_session?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth')
			}
		})

		return () => data.subscription.unsubscribe()
	})
</script>

<slot></slot>

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
		--fs: 16px;
	}

	:global(*, *::before, *::after) {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	:global(html) {
		width: 100%;
		height: 100%;
		font-family: var(--ff);
		font-size: var(--fs);
		color: var(--light);
		background-color: var(--dark);
	}

	:global(body) {
		width: 100%;
		height: 100%;
	}
</style>