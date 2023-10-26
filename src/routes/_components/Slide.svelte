<script>
	import { createEventDispatcher } from 'svelte'
	export let version = 'left'
	export let x = 0
	export let y = 0
	export let duration = 500
	export let pos = { x: 0 }
	const dispatch = createEventDispatcher()
	// console.log("Version", version)
</script>

<div
	on:transitionend={() => {
		if (x <= pos.x) dispatch('ended')
		dispatch('started')
	}}
	class={version}
	style="--x: {version === 'left' ? '' : '-'}{x}px; --y: {y}px; --dura: {duration}ms;">
	<slot />
</div>

<style>
	div {
		position: absolute;
		bottom: 0;
		top: 0;
		display: flex;
		transform: translate(var(--x), var(--y));
		transition: transform var(--dura) ease-out;
	}
	div.right {
		right: 0;
	}
	div.left {
		left: 0;
	}
</style>
