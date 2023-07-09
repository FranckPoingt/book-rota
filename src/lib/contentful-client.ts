import { createClient } from 'contentful';
import contentful from 'contentful';

const config = {
	space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
	accessToken: import.meta.env.VITE_CONTENTFUL_DELIVERY_API_TOKEN
};

const createClientFunc =
	process.env.NODE_ENV === 'development' ? createClient : contentful.createClient;

export const client = createClientFunc(config);
