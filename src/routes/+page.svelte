<script lang="ts">
	import MenuItem from '../lib/components/MenuItem.svelte';

	const pages = [
		{
			name: 'Profil',
			url: '/profil'
		},
		{
			name: 'Book',
			url: '/book'
		},
		{
			name: 'Gallerie Photos',
			url: '/gallerie'
		},
		{
			name: 'Contact',
			url: '/contact'
		}
	];
</script>

<div>
	{#each pages as page, i}
		<MenuItem name={page.name} url={page.url} tabindex={i} />
	{/each}
</div>
