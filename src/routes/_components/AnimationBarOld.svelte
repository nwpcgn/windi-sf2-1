<script>
	import Position from './Position.svelte'
	import AnimationItem from './AnimationItem.svelte'
	import ops from './options'
	const actions = [
		['bl_crouch', 'Posen', 220, 50],
		['bl_walk_forw', 'Gehen', 200, 150],
		['bl_jump_forw', 'Jump', 200, 60],
		['bl_punch', 'Punch', 200, 100],
		['bl_punch_hard', 'Punch XL', 200, 100],
		['bl_thunder', 'Thunder', 200, 60],
		['bl_jump_back', 'Jump Rev', 200, 100],
		['bl_walk_back', 'Walk Rev', 200, 100],
		['bl_stand', 'Base Stand', 400, 0]
	]
	let base = ops.sprites.bl_stand
	let base_pos = 200
	let base_pos_dur = 500
	let aniOp = {
		move: base,
		duration: 500,
		loops: 5
	}
	let frame_width = 0
	let xmin = 0
	let xmax = 0
	let left = base_pos
	let animated = false
	let slide_duration = 1000
	let el, frame
	const resetAnimation = (e) => {
		aniOp = {
			move: {
				'bl_stand_0.png': [0, 377, 103, 95],
				'bl_stand_1.png': [524, 0, 102, 96],
				'bl_stand_2.png': [524, 96, 101, 98]
			},
			duration: 400,
			loops: 3
		}
		animated = false
		slide_duration = slide_duration / 2
		left = base_pos
	}
	const resetPos = () => (slide_duration = base_pos_dur)
	const checkOutside = () => {
		if (!el || !frame) return
		const rect1 = el.getBoundingClientRect()
		const rect2 = frame.getBoundingClientRect()
		let ew = Math.floor(rect1.width)
		let fw = Math.floor(rect2.width)
		xmax = fw - ew - 1
		if (left <= xmin) left = xmin
		if (left >= xmax) left = xmax
	}
	const handleAction = (item, duration, distance) => {
		aniOp = {
			move: ops.sprites[item],
			duration,
			loops: 0
		}
		animated = true
		if (distance) {
			slide_duration = distance * 10
			left = base_pos + distance
		}
	}

	$: checkOutside(frame_width, left)
</script>

<div
	bind:clientWidth={frame_width}
	bind:this={frame}
	class:animated
	class="battle-bar">
	<Position
		bind:base_pos
		bind:duration={slide_duration}
		bind:x={left}
		on:ended={resetPos}>
		<AnimationItem
			{...ops}
			bind:animated
			bind:duration={aniOp.duration}
			bind:loops={aniOp.loops}
			bind:move={aniOp.move}
			on:ended={resetAnimation} />
	</Position>
</div>
<div class="flex flex-wrap gap-1 py-4">
	{#each actions as [item, name, duration, distance], i}
		<button on:click={() => handleAction(item, duration, distance)} class="btn"
			>{name}</button>
		{#if i == 5}<span class="flex-1" />{/if}
	{/each}
</div>

<style>
	.battle-bar {
		--opc: 0.9;
		width: 100%;
		height: 200px;
		position: relative;
		display: flex;
		border-width: 2px;
		border-style: solid;
		border-color: transparent;
		border-radius: 0.25rem;
	}
	.battle-bar.animated {
		--opc: 0.3;
		border-color: rgba(239, 68, 68, 0.9);
	}
	.battle-bar::before {
		content: '';
		position: absolute;
		right: 0;
		top: 0;
		bottom: 0;
		left: 0;
		background-image: url('/img/arena/blanka.png');
		background-repeat: no-repeat;
		background-size: cover;
		background-position: bottom;
		opacity: var(--opc);
		transition: all 0.5s ease-in-out;
		border-radius: 0.25rem;
	}
</style>
