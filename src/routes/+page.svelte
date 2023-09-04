<script lang="ts">
	import CreatePost from '../lib/components/CreatePost.svelte';
	import Post from '../lib/components/Post.svelte';
	import type { PageServerData } from './$types';
	import { page } from '$app/stores';
	import search from '$lib/search';

	export let data: PageServerData;

	function showPosts(search: string, data: PageServerData) {
		if (search.length > 0) {
			return data.posts.filter((e: any) => e.text.includes(search));
		}
		return data.posts;
	}
</script>

{#if $page.data.session}
	<CreatePost />
{/if}
{#each showPosts($search, data) as post}
	<Post
		author={post.author}
		timestamp={new Date(post.timestamp).toLocaleString()}
		tags={post.tags}
		text={post.text}
	/>
{/each}
