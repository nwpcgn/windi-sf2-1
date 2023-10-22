<script>
	import { onMount } from 'svelte'
	export let str = '',
		obj = {},
		titel = 'Svg Icons'
	export let close
	let dialog
	let open = false
	// const open = () => dialog.showModal()

	onMount(() => {
		if (dialog) open = true
	})
</script>

<section class="" />
<dialog {open} bind:this={dialog} on:close={close}>
	<article class="p-8 rounded bg-white border-2 shadow w-full max-w-sm mx-auto">
		<div cass="flex flex-col">
			<header class="mb-4">
				<h4 class="text-2xl font-semibold">{titel}</h4>
			</header>
			<div class="grid grid-cols-4 gap-4 mb-4">{@html str}</div>
			<footer>
				<form method="dialog">
					<button class="btn">Close</button>
				</form>
			</footer>
		</div>
	</article>
</dialog>

<style global>
	dialog::backdrop {
		background: repeating-linear-gradient(
			45deg,
			rgba(255, 0, 0, 0.2),
			rgba(255, 0, 0, 0.2) 1px,
			rgba(255, 0, 0, 0.3) 1px,
			rgba(255, 0, 0, 0.3) 20px
		);
	}
</style>
