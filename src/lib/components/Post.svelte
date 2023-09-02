<script lang="ts">
	import { processPostText } from '$lib/processPost';

	export let text = '';
	export let author = '';
	export let timestamp = '';
	export let tags: Array<string> = [];
</script>

<div class="post">
	<pre>{@html processPostText(text)}</pre>
	<div class="footer">
		<div class="tags">
			{#each tags as tag}
				<span class="tag-full">#{tag}</span>
			{/each}
		</div>
		<div class="info">
			<strong class="author">{author}</strong> @ <span class="date">{timestamp}</span>
		</div>
	</div>
</div>

<style>
	.post {
		border: 2px solid var(--text-opacity);
		border-radius: 0.5rem;
		padding: 1rem;
		margin: 2rem 0;
		box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
	}

	.post pre {
		margin: 0;
		padding: 0;
		margin-bottom: 1rem;
		font-size: 1.5rem;
		user-select: auto;
		white-space: pre-wrap;
		word-wrap: break-word;
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	}

	.tag-full {
		display: inline-block;
		border-radius: 0.5rem;
		padding: 0.2rem 0.5rem;
		background-color: var(--secondary);
		margin-right: 0.3rem;
	}

	:global(.tag) {
		color: var(--primary);
	}

	.footer {
		display: flex;
		align-items: center;
		justify-content: space-between;
		user-select: none;
	}

	.info {
		opacity: 0.6;
	}
</style>
