<script>
	import "$packages/scss/styles.scss";
	import Sidebar from '$lib/components/Sidebar.svelte';
	let user = 'John Doe';
</script>

<Sidebar user={user} />
<main>
	<slot></slot>
</main>
