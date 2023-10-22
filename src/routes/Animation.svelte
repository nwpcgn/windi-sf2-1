<script>
	import Layer from '../lib/Layer.svelte'
	import BattleBar from './_components/BattleBar.svelte';
	export let pages = []
	export let title = 'Sprite-Animation'
</script>

<svelte:head><title>{title}</title></svelte:head>

<Layer>
	<header class="page border border-blue-500 border-dashed">
		<div>{title}</div>
		<p class="space-x-4">
			{#each pages as { name, href, hidden }}
				{#if !hidden && href !== '/editor'}
					<a {href}>{name}</a>
				{/if}
			{/each}
		</p>
	</header>
	<article class="flex-1 flex flex-col justify-center">
		<div class="page">
			<BattleBar />
		</div>
	</article>
</Layer>
