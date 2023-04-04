<script lang="ts">
	import Node from './Node.svelte';
	export let tree: number[][] = [];
	console.log('tree passed in', tree);
</script>

{#each tree as row}
	<div class="row">
		{#each row as node}
			<Node number={node} />
		{/each}
	</div>
{/each}

<style>
	.row {
		height: 60px;
		gap: 10px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
