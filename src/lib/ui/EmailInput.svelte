<script lang="ts">

	// rune fro prop
	let { email_text='' } = $props();
</script>

<input type="email" bind:value={email_text} />

<style>
	input {
		padding: 0.5rem;
		border-radius: 0.5rem;
		border: 1px solid #ccc;
	}

	input:focus {
		outline: var(--primary) solid 1px;
		border: 1px solid var(--primary);
	}
</style>