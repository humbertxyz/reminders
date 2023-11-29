<script lang="ts">
	import type { ButtonProps } from "$lib/typing/ui";
	import Button from "$lib/ui/Button.svelte";


	let buttonProps: ButtonProps = {
		text: "Send magic link",
		onClick: () => {
			console.log("clicked");
		},
		disabled: false,
		type: "button",
		flavor: "danger",
		is_block: false,
	};
</script>

<div class="magic-link">
	<h1>Log in</h1>
	<p>
		If you have an account, we'll send you a magic link to log in.
	</p>
	<Button props={buttonProps} />
</div>

<style>
	.magic-link {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1rem;
	}
	.magic-link h1 {
		font-size: 2rem;
	}
	.magic-link p {
		font-size: 1.2rem;
	}
</style>