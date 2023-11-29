<script lang="ts">
	import type { ButtonProps } from "$lib/typing/ui";

	export let props: ButtonProps;


	let buttonClassStyles: string = [
		props.flavor ? props.flavor : "",
		props.disabled ? "disabled" : "",
		props.is_block ? "block" : "",
	]
	.map((c) => c.trim())
	.filter((c) => c.length > 0)
	.join(" ");
</script>


<button
	on:click={props.onClick}
	type={props.type}
	disabled={props.disabled}
	class={buttonClassStyles}
>{ props.text }</button>

<style>
	button,
	[role="button"] {
		padding: 0.5rem 1rem;
		background-color: var(--darky);
		border: 1px solid var(--darker);
		color: var(--white);
		border-radius: 0.25rem;
		font-size: 1rem;
		cursor: pointer;
	}

	button.block,
	[role="button"].block {
		display: block;
		width: 100%;
	}

	button.disabled,
	[role="button"].disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	button.primary,
	[role="button"].primary {
		background-color: var(--primary);
		border: 1px solid var(--primary-dark);
		color: var(--white);
	}

	button.success,
	[role="button"].success {
		background-color: var(--success);
		border: 1px solid var(--success-dark);
		color: var(--white);
	}

	button.warning,
	[role="button"].warning {
		background-color: var(--warning);
		border: 1px solid var(--warning-dark);
		color: var(--white);
	}

	button.danger,
	[role="button"].danger {
		background-color: var(--danger);
		border: 1px solid var(--danger-dark);
		color: var(--white);
	}
</style>