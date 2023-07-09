<script lang="ts">
	import { Play } from 'lucide-svelte';
	export let name = '';
	export let url = '';
	export let tabindex = 0;
</script>

<a href={url}>
	<div
		role="menuitem"
		{tabindex}
		class="movie-border w-full py-8 cursor-pointer flex flex-row justify-between items-center"
	>
		<span class="text-2xl sm:text-4xl md:text-6xl font-bold mx-8">
			{name}
		</span>
		<Play class="mr-12 md:text-6xl" color="#fff" />
	</div>
</a>

<style lang="postcss">
	.movie-border {
		position: relative;
		overflow: hidden;
		opacity: 0.8;
	}

	.movie-border::before {
		content: '';
		position: absolute;
		top: 0;
		width: 100%;
		height: 0;
		@apply bg-black;
		transition: height 0.4s ease-in-out;
		background-image: linear-gradient(to right, #fff 50%, transparent 50%);
		background-size: 16px 16px;
	}

	.movie-border::after {
		content: '';
		position: absolute;
		bottom: 0;
		width: 100%;
		height: 0;
		@apply bg-black;
		transition: height 0.4s ease-in-out;
		background-image: linear-gradient(to right, #fff 50%, transparent 50%);
		background-size: 16px 16px;
	}

	.movie-border:hover {
		opacity: 1;
	}

	.movie-border::before {
		top: 0%;
		transform: translateX(0%);
	}

	.movie-border::after {
		bottom: 0%;
		transform: translateX(0%);
	}

	.movie-border:hover::before,
	.movie-border:hover::after {
		height: 6px;
	}
</style>
