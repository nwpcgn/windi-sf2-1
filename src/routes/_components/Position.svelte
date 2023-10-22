<script>
	import { createEventDispatcher } from 'svelte'
	const dispatch = createEventDispatcher()
	export let x = 0
	export let y = 0
	export let duration = 1000
	export let base_pos = 0
</script>

<div
	on:transitionend={() => {
		if (x < (base_pos + 4)) dispatch('ended')
	}}
	style="--x: {x}px; --y: {y}px; --dura: {duration}ms;">
	<slot />
</div>

<style>
	div {
		position: absolute;
		left: 0;
		bottom: 0;
		top: 0;
		display: flex;
		transform: translate(var(--x), var(--y));
		transition: transform var(--dura) ease-out;
	}
</style>
