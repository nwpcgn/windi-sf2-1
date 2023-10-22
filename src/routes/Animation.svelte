<script>
	import BattleBar from './_components/BattleBar.svelte';
	import AnimationBarOld from './_components/AnimationBarOld.svelte'
	import AnimationBar from './_components/AnimationBar.svelte'
	export let pages = []
	export let title = 'Sprite-Animation'
	let old = true
</script>

<svelte:head><title>{title}</title></svelte:head>

<section class="layer">
	<header class="page border border-blue-500 border-dashed">
		<div>{title}</div>
		<p class="space-x-4">
			{#each pages as { name, href, hidden }}
				{#if !hidden && href !== '/editor'}
					<a {href}>{name}</a>
				{/if}
			{/each}
			<button on:click={() => (old = !old)}>{old ? 'Hide' : 'Show'} Old Animation</button>
		</p>
	</header>
	<article class="flex-1 flex flex-col justify-center">
		<div class="page">
			<BattleBar />
		</div>
		{#if old}
			<div class="page">
				<AnimationBarOld />
			</div>
		{/if}
	</article>
</section>
