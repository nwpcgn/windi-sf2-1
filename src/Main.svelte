<script>
	import { path } from 'elegua'
	import { _daten } from './lib/db/stores'
	// import Battle from './routes/Battle.svelte'
	import Animation from './routes/Animation.svelte'
	import NotFound from './routes/NotFound.svelte'
	// import Settings from './routes/Settings.svelte'
	import Start from './routes/Start.svelte'
	const pages = [
		{ name: 'Start', href: '/' },
		// { name: 'Battle', href: '/battle' },
		{ name: 'Animate', href: '/animate' }
		// { name: 'Settings', href: '/settings' }
	]
</script>

{#if $path === '/'}
	<Start {pages} />
<!-- {:else if $path === '/battle'}
	<Battle {pages} /> -->
{:else if $path === '/animate'}
	<Animation {pages} />
<!-- {:else if $path === '/settings'}
	<Settings {pages} /> -->
{:else}
	<NotFound />
{/if}
