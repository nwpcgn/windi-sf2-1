<script>
	import { quintIn, quintOut } from 'svelte/easing'
	import { fade } from 'svelte/transition'
	export let out = false
	export let center = false
	export let noscroll = false
</script>

<section
	out:fade={{ duration: 400, easing: quintIn }}
	in:fade={{ duration: 400, delay: 200, easing: quintOut }}
	class:out
	class:center
	class:noscroll>
	<slot />
</section>

<style>
	section {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		transition: opacity 600ms cubic-bezier(0.42, -0, 0.58, 1) 110ms,
			transform 500ms cubic-bezier(0.42, -0, 0.58, 1) 10ms;
		overflow-x: hidden;
		overflow-y: auto;
		flex-direction: column;
		display: flex;
		z-index: var(--z, auto);
	}

	section.noscroll {
		overflow-y: hidden;
		overflow-x: hidden;
	}

	section.center {
		align-items: center;
		justify-content: center;
	}

	section.out {
		transform: translateY(100%);
		transition: transform 400ms ease;
	}
</style>
