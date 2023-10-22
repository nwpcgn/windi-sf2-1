<script>
	import SpriteItem from './SpriteItem.svelte'
	import Position from './Position.svelte'
	import AnimationItem from './AnimationItem.svelte'
	export let ops = {}
	let frame_width = 0
	let frame_height = 150
	let xmin = 0
	let xmax = 0
	let ymax = 0
	let left = 0
	let slide_duration = 500

	let el, frame
	function checkOutside() {
		if (!el || !frame) return
		const rect1 = el.getBoundingClientRect()
		const rect2 = frame.getBoundingClientRect()
		let ew = Math.floor(rect1.width)
		// let eh = Math.floor(rect1.height)
		let fw = Math.floor(rect2.width)
		// let fh = Math.floor(rect2.height)
		// let xmin = 0
		xmax = fw - ew - 1
		// ymax = fh - eh - 1
		// top = ymax
		// left = xmax
		if (left <= xmin) left = xmin
		if (left >= xmax) {
			left = xmax
		}
		// if (top <= ymin) top = ymin
		// if (top >= ymax) top = ymax
	}

	$: checkOutside(frame_width, left)
</script>

<div
	class="battle-bar border border-dashed border-emerald-700 mb-4"
	style="--cont: '{ops.figure}';">
	<SpriteItem
		infinity={true}
		{...ops}
		base={ops.sprites.bl_stand}
		label="Stand"
		duration={300} />
	<SpriteItem
		{...ops}
		base={ops.sprites.bl_walk_forw}
		label="Walk"
		loops={3}
		duration={200} />
	<SpriteItem
		{...ops}
		base={ops.sprites.bl_jump_forw}
		label="Jump"
		loops={0}
		duration={200} />
	<SpriteItem
		{...ops}
		base={ops.sprites.bl_punch}
		label="Punch"
		loops={3}
		duration={200} />
	<SpriteItem
		on:ended={(e) => console.log('Ended', e.detail)}
		{...ops}
		base={ops.sprites.bl_thunder}
		label="Thunder"
		loops={3}
		duration={200} />
</div>
<div
	class="battle-bar border border-dashed border-emerald-700"
	bind:clientHeight={frame_height}
	bind:clientWidth={frame_width}
	bind:this={frame}
	style="--cont: 'Blanka';">
	<Position bind:x={left} bind:duration={slide_duration}>
		<AnimationItem
			on:ended={(e) => console.log('Ended', e.detail)}
			{...ops}
			base={ops.sprites.bl_punch}
			label="Punch"
			loops={1}
			duration={200} />
	</Position>
</div>

<style>
	.battle-bar {
		width: 100%;
		height: 150px;
		position: relative;
		display: flex;
	}
	.battle-bar::before {
		content: var(--cont, 'Animation-Bar');
		line-height: 1em;
		font-size: 0.8em;
		color: firebrick;
		position: absolute;
		right: 0;
		top: -1rem;
	}
</style>
