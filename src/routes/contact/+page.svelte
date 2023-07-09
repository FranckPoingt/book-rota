<script lang="ts">
	import { Mail } from 'lucide-svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1 class="text-6xl">Contact</h1>
<div class="flex flex-row gap-4 m-8 justify-start items-center">
	<Mail />
	<div class="text-xl font-medium">{data?.data?.email}</div>
</div>
