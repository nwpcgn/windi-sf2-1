<script>
	import actions from './actions'
	import BattleItem from './BattleItem.svelte'
	const player = {
		slug: 'bl_stand',
		dur: 500,
		pos: {
			x: 200,
			y: 0
		},
		actions: actions
	}
	let sprite_obj = actions.find((el) => el.slug === player.slug)
	let frame_width = 0
	let left = 0
	let top = 0
	let animated = false
	let element, frame
	const handleAction = (item) => {
		sprite_obj = item
		animated = true
		// let { slug, name, pre, loops, duration, position, sprites } = item
		// console.log("Handle Action", {slug, name, pre, loops, duration, position, sprites})
	}
</script>

<article
	bind:clientWidth={frame_width}
	bind:this={frame}
	class:animated
	class="battle-bar">
	<BattleItem
		{...player}
		bind:animated
		bind:sprite_obj
		bind:frame_width
		bind:left
		bind:top
		bind:element
		bind:frame />
</article>

<footer class="flex gap-1 py-4">
	<div class="flex flex-col gap-1 flex-1">
		{#each player.actions as item, i}
			{#if i < 3}
				<button on:click={() => handleAction(item)} class="btn"
					>{item.name}</button>
			{/if}
		{/each}
	</div>
	<div class="flex flex-col gap-1 flex-1">
		{#each player.actions as item, i}
			{#if i > 2 && i < 6}
				<button on:click={() => handleAction(item)} class="btn"
					>{item.name}</button>
			{/if}
		{/each}
	</div>
	<div class="flex flex-col gap-1 flex-1">
		{#each player.actions as item, i}
			{#if i > 5 && i < 9}
				<button on:click={() => handleAction(item)} class="btn"
					>{item.name}</button>
			{/if}
		{/each}
	</div>
	<div class="flex-1" />
	<div class="flex flex-col gap-1 flex-1">
		{#each player.actions as item, i}
			{#if i > 8}
				<button on:click={() => handleAction(item)} class="btn"
					>{item.name}</button>
			{/if}
		{/each}
	</div>
</footer>
<details class="mt-4">
	<summary>Alternative</summary>
	<footer class="flex flex-wrap gap-1 py-4">
		{#each player.actions as item, i}
			<button on:click={() => handleAction(item)} class="btn" disabled={animated}
				>{item.name}</button>
		{/each}
	</footer>
</details>

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
