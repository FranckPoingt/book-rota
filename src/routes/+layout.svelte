<script lang="ts">
	import { fly } from 'svelte/transition';
	import { cubicIn, cubicOut } from 'svelte/easing';
	import '../app.postcss';

	export let data;

	const duration = 300;
	const delay = duration + 100;
	const y = 10;

	const transitionIn = { easing: cubicOut, y, duration, delay };
	const transitionOut = { easing: cubicIn, y: -y, duration };
</script>

<div class="min-h-screen">
	<main class="flex flex-col">
		<a href="/">
			<div class="max-w-md m-8 flex flex-col -space-y-2">
				<h1 class="text-5xl font-bold">Maxime</h1>
				<h2 class="text-5xl font-bold">Rota Scalabrini</h2>
			</div>
		</a>
		{#key data.pathname}
			<div in:fly={transitionIn} out:fly={transitionOut}>
				<slot />
			</div>
		{/key}
	</main>
	<footer class="flex flex-col justify-center items-center sticky top-[100vh] pb-8">
		<div class="text-2xl font-bold italic">"Coucou petite perruche"</div>
	</footer>
</div>
