<script>
	//	import { meta, resource, workers, buildings, upgrades } from './variables'
	export let resource = {}
</script>

<table class="table-fixed w-full text-left">
	<thead class="text-gray-200 uppercase bg-gray-500">
		<tr>
			{#each ['Resource', 'Total', 'Maximal', 'Click', 'Auto'] as item}
				<td class="py-1 border text-center text-sm font-light p-1">{item}</td>
			{/each}
		</tr>
	</thead>
	<tbody class="bg-white text-gray-500">
		{#each Object.values(resource) as { slug, name, description, total, clickIncrement, autoIncrement, max }}
			<tr class="py-1">
				<td class="py-1 border text-center p-2" contenteditable="true">
					<!-- 	<svg class="rpg rpg-{slug}"><use xlink:href="#rpg-{slug}" /></svg> -->
					{name}
				</td>
				<td class="py-1 border text-center p-2" contenteditable="true"
					>{total}</td>
				<td class="py-1 border text-center p-2" contenteditable="true"
					>{max}</td>
				<td class="py-1 border text-center p-2" contenteditable="true"
					>{clickIncrement ? clickIncrement : '0'}</td>
				<td class="py-1 border text-center p-2" contenteditable="true"
					>{autoIncrement}</td>
			</tr>
		{/each}
	</tbody>
</table>

<style>
	.media-grid svg.rpg {
		display: inline-block;
		width: 100%;
		height: 100%;
		stroke-width: 0;
		stroke: currentColor;
		fill: currentColor;
	}

	.media-grid {
		display: grid;
		grid-template-columns: minmax(100px, auto) 2fr minmax(100px, auto);
		grid-template-rows: minmax(100px, auto);
		grid-template-areas: 'figure article aside';
		gap: 1rem;
	}

	.media-grid .figur {
		grid-area: figure;
		max-width: 100px;
	}

	.media-grid .article {
		grid-area: article;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
	}

	.media-grid .aside {
		grid-area: aside;
		display: flex;
		flex-direction: column;
		text-align: right;
		padding-right: 0.5rem;
	}

	.media-grid .figur img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.media-grid .aside > div {
		display: flex;
		gap: 0.5rem;
		justify-content: flex-end;
		padding: 0.5rem;
	}
</style>
