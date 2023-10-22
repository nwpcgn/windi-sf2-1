<script>
	import { createEventDispatcher } from 'svelte'
	const dispatch = createEventDispatcher()
	export let pre = 'blanka/'
	export let move = {}
	export let loops = 1
	export let duration = 200
	export let infinity = false
	export let element
	export let animated = false
	let interval1, timeout1
	let current = 0
	const runAnimation = () => {
		if (interval1) clearInterval(interval1)

		let end = Object.keys(move).length - 1
		let count = 0
		let start = 0

		interval1 = setInterval(() => {
			if (current < end) {
				current = current + 1
			} else {
				if (infinity) {
					current = 0
				} else if (count < loops && !infinity) {
					current = start
					count = count + 1
				} else {
					clearInterval(interval1)
					dispatch('ended', { loops, duration, animated, count, current })
					count = 0
					current = 0
				}
			}
		}, duration)
		if (timeout1) clearTimeout(timeout1)

		timeout1 = setTimeout(() => {
			infinity = false
			clearInterval(interval1)
		}, 10000)
	}
	$: if (move && animated) runAnimation(loops, duration)
</script>

<div bind:this={element} on:pointerdown={runAnimation} class="battle-item">
	<span
		data-sevenup="{pre}{Object.keys(move)[current]}"
		title={Object.keys(move)[current]}
		aria-label="animation" 
		role="img" />
</div>

<style>
	.battle-item {
		position: relative;
		display: inline-flex;
		align-items: end;
	}
</style>
