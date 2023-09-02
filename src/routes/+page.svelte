<script lang="ts">
	import CreatePost from '../lib/components/CreatePost.svelte';
	import Post from '../lib/components/Post.svelte';
	import type { PageServerData } from './$types';
	import { page } from '$app/stores';
	export let data: PageServerData;
</script>

{#if $page.data.session}
	<CreatePost />
{/if}
{#each data?.posts as post}
	<Post
		author={post.author}
		timestamp={new Date(post.timestamp).toLocaleString()}
		tags={post.tags}
		text={post.text}
	/>
{/each}
