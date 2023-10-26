<script>
	import actions2 from './actions_chunli'
	import actions1 from './actions_blanka'
	import BattleItem from './BattleItem.svelte'
	let player1 = {
		slug: 'bl_stand',
		dur: 500,
		pos: {
			x: 200,
			y: 0
		},
		actions: actions1,
		version: 'left'
	}
	let player2 = {
		slug: 'cl_base_stand_a',
		dur: 500,
		pos: {
			x: 200,
			y: 0
		},
		actions: actions2,
		version: 'right'
	}
	let sprite_obj1 = player1.actions.find((el) => el.slug === player1.slug)
	let sprite_obj2 = player2.actions.find((el) => el.slug === player2.slug)
	let frame_width = 0
	let left1 = 0
	let top1 = 0
	let animated1 = false
	let left2 = 0
	let top2 = 0
	let animated2 = false
	let element1, element2, frame
	const handleAction1 = (item1) => {
		sprite_obj1 = item1
		animated1 = true
		// let { slug, name, pre, loops, duration, position, sprites } = item
		// console.log("Handle Action", {slug, name, pre, loops, duration, position, sprites})
	}
	const handleAction2 = (item2) => {
		sprite_obj2 = item2
		animated2 = true
	}

	const handleResize = () => {
		let b = Math.round(frame_width / 2)
		let c = b - 100
		player1.pos.x = c
		player2.pos.x = c
		console.log("RESIZE", {player1, player2})
	}

	$: handleResize(frame_width)
</script>

<article
	bind:clientWidth={frame_width}
	bind:this={frame}
	class:animated={animated1 || animated2}
	class="battle-bar">

	<BattleItem
		{...player1}
		bind:animated={animated1}
		bind:sprite_obj={sprite_obj1}
		bind:left={left1}
		bind:top={top1}
		bind:element={element1}
		bind:frame_width
		bind:frame />
	<BattleItem
		{...player2}
		bind:animated={animated2}
		bind:sprite_obj={sprite_obj2}
		bind:left={left2}
		bind:top={top2}
		bind:element={element2}
		bind:frame_width
		bind:frame />
</article>

<footer class="flex gap-4 py-4">
	<div class="flex flex-wrap gap-1">
		{#each player1.actions as item1, i}
			<button
				on:click={() => handleAction1(item1)}
				class="btn">{item1.name}</button>
		{/each}
	</div>
	<div class="flex flex-wrap gap-1">
		{#each player2.actions as item2, i}
			<button
				on:click={() => handleAction2(item2)}
				class="btn">{item2.name}</button>
		{/each}
	</div>
</footer>

<style>
	.battle-bar {
		--opc: 0.9;
		--bgc: #eee;
		width: 100%;
		height: 200px;
		position: relative;
		display: flex;
		border-width: 2px;
		border-style: solid;
		border-color: var(--sky-500, transparent);
		border-radius: 0.25rem;
	}
	.battle-bar.animated {
		--opc: 0.7;
		--bgc: var(--sky-400);
		border-color: rgba(239, 68, 68, 0.9);
	}
	.battle-bar::before {
		content: 'Blanka Sprite Animation';
		position: absolute;
		right: 0;
		top: 0;
		bottom: 0;
		left: 0;
		color: rgba(239, 68, 68, 0.9);
		background-color: var(--bgc);
		background-image: url('/img/arena/blanka.png');
		background-repeat: no-repeat;
		background-size: cover;
		background-position: bottom;
		opacity: var(--opc);
		transition: all 0.5s ease-in-out;
		border-radius: 0.25rem;
	}
</style>
