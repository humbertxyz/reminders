<script>
	export let route = {
		name: '',
		href: ''
	};
</script>

<a href={route.href}>{route.name}</a>

<style>
	a {
		text-decoration: none;
		color: inherit;
		cursor: pointer;
	}
</style>