<script>
	import SpriteItem from './SpriteItem.svelte'
	import Position from './Position.svelte'
	import AnimationItem from './AnimationItem.svelte'
	import ops from './options'
	const actions = [
	//	['bl_stand', 300],
		['bl_crouch', 200, 50, 500],
		['bl_walk_forw', 200, 150, 1500],
		['bl_jump_forw', 200, 60, 600],
		['bl_punch', 200, 100, 1000],
		['bl_punch_hard', 200, 100, 1000],
		['bl_thunder', 200, 60, 600],
		['bl_jump_back', 200, 100, 300],
		['bl_walk_back', 200, 100, 300]
	]
	let base = ops.sprites.bl_stand
	let status = 'stop'
	let aniOp = {
		move: base,
		duration: 300,
		loops: 1,
		infinity: true
	}
	let frame_width = 0
	let xmin = 0
	let xmax = 0
	let left = 0
	let slide_duration = 1000
	let el, frame
	const resetAnimation = () => {
		aniOp = {
			move: ops.sprites.bl_stand,
			duration: 400,
			loops: 3
		}
		slide_duration = slide_duration / 2
		left = 0
	}
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
	function replaceAll(str, find, replace) {
		return str.replace(new RegExp(find, 'g'), replace)
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
	<div>
		<pre>{Object.keys(ops.sprites).join(', ')}</pre>
	</div>
</div>
<div
	class="battle-bar border border-dashed border-emerald-700"
	bind:clientWidth={frame_width}
	bind:this={frame}
	style="--cont: '{status}';">
	<Position on:ended={() => (slide_duration = 500)} bind:x={left} bind:duration={slide_duration}>
		<AnimationItem
			on:ended={() => resetAnimation()}
			{...ops}
			bind:move={aniOp.move}
			bind:loops={aniOp.loops}
			bind:duration={aniOp.duration}
			bind:status />
	</Position>
</div>
<div class="flex flex-wrap gap-1 py-4">
	{#each actions as [item, duration, distance], i}
		<button
			on:click={() => {
				aniOp = {
					move: ops.sprites[item],
					duration,
					loops: 0
				}
				if (distance) {
					slide_duration = distance *  10
					left = distance
				}
			}}
			class="capitalize btn">{replaceAll(item, '_', ' ')}</button>
	{/each}
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
