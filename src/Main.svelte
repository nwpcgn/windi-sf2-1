<script>
	import { path } from 'elegua'
	import { _daten } from './lib/db/stores'
	import Animation from './routes/Animation.svelte'
	import NotFound from './routes/NotFound.svelte'
	import Start from './routes/Start.svelte'
	const pages = [
		{ name: 'Start', href: '/' },
		// { name: 'Battle', href: '/battle' },
		{ name: 'Animate', href: '/animate' }
	]
</script>

{#if $path === '/'}
	<Start {pages} />
<!-- {:else if $path === '/battle'}
	<Battle {pages} /> -->
{:else if $path === '/animate'}
	<Animation {pages} />
{:else}
	<NotFound />
{/if}
