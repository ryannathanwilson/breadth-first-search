<script lang="ts">
	import Tree from '$lib/components/Tree.svelte';
	import parseTree from '$lib/utils/parseTree';

	const tree = [1, 2, 3, 4, 5, 6, 7];
	console.log('tree', tree);
</script>

<Tree tree={parseTree(tree)} />
