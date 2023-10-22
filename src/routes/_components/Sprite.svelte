<script>
	import { createEventDispatcher } from 'svelte'
	const dispatch = createEventDispatcher()
	export let sprites = {
		blanka_bl_stand_0: [965, 652, 103, 95],
		blanka_bl_stand_1: [927, 757, 102, 96],
		blanka_bl_stand_2: [205, 863, 101, 98]
	}
	export let pre = 'bl_left1'
	export let loops = 1
	export let duration = 200
	export let position = []
	export let options = { type: 'css' }
	export let infinity = false
	export let element
	export let animated = false
	export let x = 0
	let interval1, timeout1
	let current = 0
	const runAnimation = () => {
		if (interval1) clearInterval(interval1)

		let end = Object.keys(sprites).length - 1
		let count = 0
		let start = 0
		x += position[0]
		dispatch('started', {
			x,
			length: Object.keys(sprites).length,
			position,
			loops,
			duration,
			options,
			animated,
			sprites
		})
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
	$: if (sprites && animated) runAnimation(loops, duration)
</script>

<div bind:this={element} on:pointerdown={runAnimation} class="battle-item">
	{#if options.type === 'style'}
		<span
			class="{pre} {Object.keys(sprites)[current]}"
			title={Object.keys(sprites)[current]}
			aria-label="style-animated"
			role="img" />
	{:else}
		<span
			class="{pre} {Object.keys(sprites)[current]}"
			title={Object.keys(sprites)[current]}
			aria-label="class-animated"
			role="img" />
	{/if}
</div>

<style>
	.battle-item {
		position: relative;
		display: inline-flex;
		align-items: end;
	}
</style>
