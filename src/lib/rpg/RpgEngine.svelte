<script>
	import TableResource from './TableResource.svelte'

	import { meta, resource, workers, buildings, upgrades } from './variables'
</script>

<!-- 
<div><pre>{Object.keys(resource.bread).join(',')}</pre></div>
<div><pre>{Object.keys(resource).join(',')}</pre></div> -->
<!--  slug,name,description,total,clickIncrement,autoIncrement,max -->
<!-- cost, chance ,storage -->

<div class="w-full">
	<div class="relative overflow-x-auto shadow-md rounded-lg">
		<TableResource {resource} />
	</div>
</div>
