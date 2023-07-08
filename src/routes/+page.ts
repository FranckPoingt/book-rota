import { createClient } from '@sanity/client';

const client = createClient({
	projectId: 'rt4d2lr2',
	dataset: 'production',
	apiVersion: '2021-10-21',
	useCdn: false
});

// export async function load({ params }) {
// 	const data = await client.fetch(`*[_type == 'movie']`);

// 	if (data) {
// 		console.log(data);
// 		return {
// 			data
// 		};
// 	}
// 	return {
// 		status: 500,
// 		body: new Error('Internal Server Error')
// 	};
// }
