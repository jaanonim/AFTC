<script>
	import SearchBar from './SearchBar.svelte';

	import Login from '$lib/components/Login.svelte';
</script>

<nav>
	<div>
		<h1>AFTC</h1>
		<SearchBar />
		<Login />
	</div>
</nav>

<style>
	nav {
		position: sticky;
		top: 0;
		left: 0;
		width: 100vw;
		z-index: 100;
		margin: 0;
		background-color: var(--secondary);
		user-select: none;
		box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
	}

	div {
		margin: 0;
		padding: 1rem;
		position: relative;
		width: calc(100vw - 2rem);
		display: flex;
		justify-content: space-between;
		align-items: 'center';
	}

	h1 {
		display: block;
		margin: 0;
		font-size: 2rem;
		padding-left: 0.5rem;
	}
</style>
