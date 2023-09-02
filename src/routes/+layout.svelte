<script>
	import Footer from '../lib/components/Footer.svelte';
	import NavBar from '../lib/components/NavBar.svelte';
	import './scrollBars.css';
</script>

<NavBar />
<main>
	<slot />
</main>
<Footer />

<style>
	:root {
		--text: #eeeeee;
		--text-opacity: #eeeeee44;
		--text-error: #ee4444;

		--background: #222831;
		--background-secondary: #393e46;
		--primary: #00adb5;
		--secondary: #0199a1;
	}

	:global(html) {
		margin: 0;
		padding: 0;
		min-height: 100vh;
		width: 100vw;
	}

	:global(body) {
		margin: 0;
		padding: 0;
		min-height: 100vh;
		width: 100vw;
		display: flex;
		flex-direction: column;
		color: var(--text);
		background-color: var(--background);
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
		overflow-x: hidden;
	}

	:global(button):focus {
		outline: none;
	}

	:global(a) {
		color: var(--primary);
		text-decoration: none;
	}

	:global(a):hover {
		color: var(--primary);
		text-decoration: underline;
	}

	main {
		margin: 3rem auto;
		width: clamp(30ch, 50%, 75ch);
		flex: 1;
	}
</style>
