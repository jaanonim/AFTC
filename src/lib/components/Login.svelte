<script>
	import { signIn, signOut } from '@auth/sveltekit/client';
	import { page } from '$app/stores';
	import Icon from '@iconify/svelte';
</script>

{#if $page.data.session}
	<div>
		<span class="signedInText">
			<small>Signed in as</small><br />
			<strong>{$page.data.session.user?.name ?? 'User'}</strong>
		</span>
		<button class="logout" on:click={() => signOut()}>
			<Icon icon="mdi:logout" inline={true} />
		</button>
	</div>
{:else}
	<button class="login" on:click={() => signIn('google')}>Login with Google</button>
{/if}

<style>
	.logout {
		z-index: 1;
		color: var(--text);
		background-color: transparent;
		border: none;
		font-size: 2rem;
		cursor: pointer;
		transition: all 200ms ease-out;
	}

	.logout:hover {
		transform: translateX(0.2rem);
	}

	.login {
		z-index: 1;
		color: var(--text);
		background-color: transparent;
		border: 2px solid var(--text);
		border-radius: 0.5rem;
		font-weight: 800;
		padding: 0.5rem;
		font-size: 1rem;
		cursor: pointer;
		transition: all 200ms ease-out;
	}

	.login:hover {
		transform: scale(1.05);
		box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
	}

	div {
		display: flex;
		gap: 0.5rem;
	}
</style>
