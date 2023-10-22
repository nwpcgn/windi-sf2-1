<script>
	// const size = 'w-10 h-10'
	// const temp = (size = 'w-10 h-10') => `<figure class="rpsvg-figure"><svg class="rpsvg rpsvg-adventure_map ${size ? size : ''}"><use xlink:href="#rpsvg_adventure_map"/></svg><figcaption class="capitalize">adventure_map</figcaption></figure><figure class="rpsvg-figure"><svg class="rpsvg rpsvg-armor ${size ? size : ''}"><use xlink:href="#rpsvg_armor"/></svg><figcaption class="capitalize">armor</figcaption></figure><figure class="rpsvg-figure"><svg class="rpsvg rpsvg-crystal_shard ${size ? size : ''}"><use xlink:href="#rpsvg_crystal_shard"/></svg><figcaption class="capitalize">crystal_shard</figcaption></figure><figure class="rpsvg-figure"><svg class="rpsvg rpsvg-destructive_magic ${size ? size : ''}"><use xlink:href="#rpsvg_destructive_magic"/></svg><figcaption class="capitalize">destructive_magic</figcaption></figure><figure class="rpsvg-figure"><svg class="rpsvg rpsvg-elf ${size ? size : ''}"><use xlink:href="#rpsvg_elf"/></svg><figcaption class="capitalize">elf</figcaption></figure><figure class="rpsvg-figure"><svg class="rpsvg rpsvg-grim_reaper ${size ? size : ''}"><use xlink:href="#rpsvg_grim_reaper"/></svg><figcaption class="capitalize">grim_reaper</figcaption></figure><figure class="rpsvg-figure"><svg class="rpsvg rpsvg-helmet ${size ? size : ''}"><use xlink:href="#rpsvg_helmet"/></svg><figcaption class="capitalize">helmet</figcaption></figure><figure class="rpsvg-figure"><svg class="rpsvg rpsvg-king ${size ? size : ''}"><use xlink:href="#rpsvg_king"/></svg><figcaption class="capitalize">king</figcaption></figure><figure class="rpsvg-figure"><svg class="rpsvg rpsvg-knight ${size ? size : ''}"><use xlink:href="#rpsvg_knight"/></svg><figcaption class="capitalize">knight</figcaption></figure><figure class="rpsvg-figure"><svg class="rpsvg rpsvg-potion ${size ? size : ''}"><use xlink:href="#rpsvg_potion"/></svg><figcaption class="capitalize">potion</figcaption></figure><figure class="rpsvg-figure"><svg class="rpsvg rpsvg-sorceress_witch ${size ? size : ''}"><use xlink:href="#rpsvg_sorceress_witch"/></svg><figcaption class="capitalize">sorceress_witch</figcaption></figure><figure class="rpsvg-figure"><svg class="rpsvg rpsvg-spell_book ${size ? size : ''}"><use xlink:href="#rpsvg_spell_book"/></svg><figcaption class="capitalize">spell_book</figcaption></figure><figure class="rpsvg-figure"><svg class="rpsvg rpsvg-spell_scroll ${size ? size : ''}"><use xlink:href="#rpsvg_spell_scroll"/></svg><figcaption class="capitalize">spell_scroll</figcaption></figure><figure class="rpsvg-figure"><svg class="rpsvg rpsvg-viking ${size ? size : ''}"><use xlink:href="#rpsvg_viking"/></svg><figcaption class="capitalize">viking</figcaption></figure><figure class="rpsvg-figure"><svg class="rpsvg rpsvg-werewolf ${size ? size : ''}"><use xlink:href="#rpsvg_werewolf"/></svg><figcaption class="capitalize">werewolf</figcaption></figure>`
	// import { openModalV2 } from './lib/components/ModalV2.svelte'
	// import Dialog from './lib/Dialog.svelte'
	// import ModalV2 from './lib/components/ModalV2.svelte'
	// import RpgSvg from './lib/RpgSvg.svelte';
	import { path } from 'elegua'
	import Main from './Main.svelte'
	import SplashSceen from './lib/SplashSceen.svelte'
	const showIcons = () => {
		return
	}
	// openModalV2(Dialog, { titel: 'Rpg Svg Icons', str: temp() })
	const delay = 4000
	$path = '/'
	
</script>

<SplashSceen {delay} let:db>
	<Main {db} {showIcons} />
</SplashSceen>
<!-- <ModalV2 />
<RpgSvg /> -->

