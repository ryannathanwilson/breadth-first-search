<script lang="ts">
	export let number: number | null = null;
</script>

<div>
	{number}
</div>

<style lang="scss">
	div {
		display: flex;
		width: 30px;
		aspect-ratio: 1;
		justify-content: center;
		align-items: center;
		border: 2px solid grey;
		border-radius: 50%;
	}
</style>
