<script type="ts">
	import Icon from '@iconify/svelte';
	import search from '$lib/search';
</script>

<div class="container">
	<div class="search">
		<Icon class="search-icon" icon="mdi:magnify" inline={true} />
		<input type="text" spellcheck="false" bind:value={$search} />
		<button
			style="opacity: {$search.length > 0 ? 1 : 0}; 
				pointer-events:  {$search.length > 0 ? 'all' : 'none'};
				transform: rotate({$search.length > 0 ? '0deg' : '90deg'});"
			on:click={() => {
				$search = '';
			}}
		>
			<Icon class="close-icon" icon="mdi:close" inline={true} />
		</button>
	</div>
</div>

<style>
	.container {
		position: absolute;
		width: calc(100% - 2rem);
		height: calc(100% - 2rem);
		left: 0;
		top: 0;
		padding: 1rem;
	}

	.search {
		position: relative;
		width: calc(clamp(20ch, 50%, 75ch) - 1rem);
		height: 1.5rem;
		border: 2px solid var(--text-opacity);
		border-radius: 0.5rem;
		padding: 0.5rem;
		font-size: 1rem;
		color: var(--text);
		margin: auto;
	}

	:global(.search-icon) {
		top: 0.25rem;
		left: 0.5rem;
		position: absolute;
		font-size: 2rem;
		color: var(--text-opacity);
	}

	button {
		top: 0.25rem;
		right: 0.5rem;
		position: absolute;
		font-size: 2rem;
		color: var(--text);
		transition: all 200ms ease-out;
		padding: 0;
		margin: 0;
		border: none;
		background-color: transparent;
		cursor: pointer;
	}

	:global(.close-icon) {
		font-size: 2rem;
		color: var(--text);
		transition: all 200ms ease-out;
	}

	:global(.close-icon:hover) {
		transform: rotate(90deg);
	}

	input {
		top: 0.25rem;
		left: 0.5rem;
		padding-left: 3ch;
		padding-right: 3ch;
		position: absolute;
		width: calc(100% - 6ch);
		border: none;
		background-color: transparent;
		color: var(--text);
		font-size: 1.5rem;
	}

	input:focus {
		outline: none;
	}
</style>
