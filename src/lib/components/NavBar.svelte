<script>
	import Login from '$lib/components/Login.svelte';
</script>

<nav>
	<h1>AFTC</h1>
	<div class="right"><Login /></div>
</nav>

<style>
	nav {
		position: sticky;
		top: 0;
		left: 0;
		width: calc(100vw - 2rem);
		z-index: 100;
		margin: 0;
		padding: 1rem;
		background-color: var(--secondary);
		display: flex;
		justify-content: space-between;
		align-items: 'center';
		user-select: none;
		box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
	}

	h1 {
		display: block;
		margin: 0;
		font-size: 2rem;
		padding-left: 0.5rem;
	}
</style>
