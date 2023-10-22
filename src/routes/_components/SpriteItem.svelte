<script>
	import { createEventDispatcher } from 'svelte'
	const dispatch = createEventDispatcher()
	export let figure = 'Blanka'
	export let direction = 'left'
	export let pre = 'blanka/'
	export let sprites = {}
	export let base = {}
	export let loops = 1
	export let duration = 200
	const runAnimation = (length = 1) => {
		if (interval1) clearInterval(interval1)
		let end = length - 1
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
					current = 0
					dispatch('ended', Object.keys(base)[0])
				}
			}
		}, duration)
		if (timeout1) clearTimeout(timeout1)

		timeout1 = setTimeout(() => {
			infinity = false
		}, 10000)
	}
	export let infinity = false
	export let label = 'Sprite'
	export let element
	let interval1, timeout1
	let style = ''
	let current = 0
</script>

<div
	bind:this={element}
	on:pointerdown={() => runAnimation(Object.keys(base).length)}
	class="battle-item"
	style="--cont: '{label}{infinity ? '' : ` / ${loops}`}';">
	<span
		data-sevenup="{pre}{Object.keys(base)[current]}"
		role="img"
		title={Object.keys(base)[current]}
		aria-label="animation"
		{style}>
		<!-- <div role="img" aria-label="animation" {style} /> -->
	</span>
</div>

<style>
	.battle-item {
		position: relative;
		display: inline-flex;
		align-items: end;
		@apply border border-dashed border-red-500;
	}
	.battle-item::before {
		content: var(--cont, 'Animation');
		line-height: 0.8em;
		font-size: 0.6em;
		color: firebrick;
		position: absolute;
		right: 0.25rem;
		top: 0.25rem;
	}
</style>
