<script>
	import { onMount } from 'svelte'
	import { _daten, _settings } from './db'
	import { sleep } from './util'
	export let delay = 5000
	let db = {}
	let ready = false
	let fadeOut = false
	const fetchData = (url) =>
		fetch(url)
			.then((r) => r.json())
			.then((d) => d)
			.catch((e) => e)

	const init = () => {
		const promise1 = fetchData('./data/battle-obj.json')
		const promise2 = fetchData('./data/player-obj.json')
		const promise3 = fetchData('./data/streetfigther.json')
		const promise4 = fetchData('./data/rpg.json')

		Promise.all([promise1, promise2, promise3, promise4])
			.then((values) => {
				db.battle = values[0]
				db.player = values[1]
				db.sprites = values[2]
				db.rpg = values[3]
				return db
			})
			.then((d) => {
				_daten.set(d)
				// console.log('DB > APP: ', $_daten)
				ready = true
				return d
			})
	}

	onMount(async () => {
		await sleep(delay)
		init()
		fadeOut = true
		await sleep(400)
		ready = true
		fadeOut = false
	})
</script>

{#if !ready}
	<section>
		<span class="loader" />
	</section>
{:else}
	<slot {db}><!-- optional fallback --></slot>
{/if}

<style>
	section {
		background: #2c2d2e;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 1000;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.loader {
		transform: rotateZ(45deg);
		perspective: 1000px;
		border-radius: 50%;
		width: 88px;
		height: 88px;
		color: #fff;
	}
	.loader:before,
	.loader:after {
		content: '';
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		width: inherit;
		height: inherit;
		border-radius: 50%;
		transform: rotateX(70deg);
		animation: 1s spin linear infinite;
	}
	.loader:after {
		color: #ff3d00;
		transform: rotateY(70deg);
		animation-delay: 0.4s;
	}

	@keyframes rotate {
		0% {
			transform: translate(-50%, -50%) rotateZ(0deg);
		}
		100% {
			transform: translate(-50%, -50%) rotateZ(360deg);
		}
	}

	@keyframes rotateccw {
		0% {
			transform: translate(-50%, -50%) rotate(0deg);
		}
		100% {
			transform: translate(-50%, -50%) rotate(-360deg);
		}
	}

	@keyframes spin {
		0%,
		100% {
			box-shadow: 0.2em 0px 0 0px currentcolor;
		}
		12% {
			box-shadow: 0.2em 0.2em 0 0 currentcolor;
		}
		25% {
			box-shadow: 0 0.2em 0 0px currentcolor;
		}
		37% {
			box-shadow: -0.2em 0.2em 0 0 currentcolor;
		}
		50% {
			box-shadow: -0.2em 0 0 0 currentcolor;
		}
		62% {
			box-shadow: -0.2em -0.2em 0 0 currentcolor;
		}
		75% {
			box-shadow: 0px -0.2em 0 0 currentcolor;
		}
		87% {
			box-shadow: 0.2em -0.2em 0 0 currentcolor;
		}
	}
</style>
