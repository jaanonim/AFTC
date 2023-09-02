<script lang="ts">
	import { isValidPostLength, maxPostLength } from '$lib/postLength';
	import { processPostText } from '$lib/processPost';
	import Icon from '@iconify/svelte';
	let text = '';
	let from: HTMLFormElement;
</script>

<div class="post">
	<form method="post" bind:this={from}>
		<pre>{@html processPostText(text)}
			<textarea
				bind:value={text}
				name="text"
				placeholder="What are you thinking?"
				spellcheck="true"
				on:keydown={(event) => {
					if (event.key === 'Enter' && !event.shiftKey) {
						event.preventDefault();
						from.submit();
					}
				}}
			/>
		</pre>

		<div class="footer">
			<span class="limit{isValidPostLength(text) && text !== '' ? '-error' : ''}"
				><br />{text.length}/{maxPostLength}</span
			>
			<button disabled={isValidPostLength(text)}
				><span>Post</span> <Icon icon="mdi:send-variant-outline" class="icon" /></button
			>
		</div>
	</form>
</div>

<style>
	.post {
		border: 2px solid var(--text-opacity);
		border-radius: 0.5rem;
		padding: 1rem;
		margin: 2rem 0;
		box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
	}

	.footer {
		display: flex;
		align-items: center;
		justify-content: space-between;
		user-select: none;
	}

	textarea {
		padding: 0;
		margin: 0;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1;
		background: transparent;
		border: none;
		width: 100%;
		height: 100%;
		font-size: 1.5rem;
		color: var(--text);
		resize: none;
		overflow: visible;
		color: transparent;
		caret-color: var(--text);
		word-wrap: break-word;
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	}

	pre {
		padding: 0;
		margin: 0;
		position: relative;
		background: transparent;
		border: none;
		width: 100%;
		font-size: 1.5rem;
		color: var(--text);
		resize: none;
		overflow: visible;
		white-space: pre-wrap;
		word-wrap: break-word;
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	}

	textarea:focus {
		outline: none;
	}

	button {
		color: var(--text);
		background-color: var(--primary);
		border: none;
		border-radius: 0.5rem;
		font-weight: 800;
		padding: 0.4rem 0.3rem 0.4rem 0.7rem;
		font-size: 1rem;
		cursor: pointer;
		transition: all 200ms ease-out;
		display: flex;
		align-items: center;
		justify-content: space-around;
		gap: 0.2rem;
	}

	button:disabled {
		background-color: var(--background-secondary);
		pointer-events: none;
	}

	button:hover {
		transform: scale(1.1);
		box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
	}

	:global(.icon) {
		font-size: 1.5rem;
	}

	.limit {
		opacity: 0.6;
		color: var(--text);
		transition: all 200ms ease-out;
	}

	.limit-error {
		opacity: 1;
		color: var(--text-error);
		transition: all 200ms ease-out;
	}
</style>
