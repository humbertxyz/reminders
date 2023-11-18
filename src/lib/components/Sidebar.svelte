
<script>
	export let user = '';
</script>

<style>
	aside {
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		width: var(--sidebar-mobile);
		background-color: var(--darker);
		z-index: var(--sidebar-z-index);
	}
</style>

<aside class="sidebar">
	<div class="sidebar-section">
		{#if user}
			<p>Logged in as {user}</p>
			<button>Logout</button>
		{:else}
			<button>Login</button>
		{/if}
	</div>
	
	<div class="sidebar-section">
		<ul>
			<li><a href="/">Home</a></li>
			<li><a href="/accounts">Accounts</a></li>
			<li><a href="/subscriptions">Subscriptions</a></li>
		</ul>
	</div>
	
	<div class="sidebar-section">
		<h3>Settings</h3>
		<ul>
			<li><a href="/settings/profile">Profile</a></li>
			<li><a href="/settings/preferences">Preferences</a></li>
			<li><a href="/settings/security">Security</a></li>
		</ul>
	</div>
</aside>