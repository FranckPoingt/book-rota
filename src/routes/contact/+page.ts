import { client } from '$lib/contentful-client';
import type { PageLoad } from './$types';

export const load = (async () => {
	const data = await client.getEntries({
		content_type: 'contact'
	});
	if (data) {
		console.log(data);
		return {
			data: data.items[0].fields
		};
	}
	return {
		status: 500,
		body: new Error('Internal Server Error')
	};
}) satisfies PageLoad;
