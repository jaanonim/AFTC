import { error, json } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import clientPromise from '$lib/database/clientPromise';
import { NODE_ENV } from '$env/static/private';
import { tagRegex } from '$lib/tags';

export const actions = {
	default: async ({ request, locals }) => {
		const session = await locals.getSession();
		if (!session?.user) return error(403, { message: 'Missing authorization.' });

		const data = await request.formData();
		const text = data.get('text')?.toString();
		if (!text) return error(400, { message: 'Missing text.' });
		if (text.length > 120 || text.length < 1) return error(400, { message: 'Invalid text length' });

		const dbConnection = await clientPromise;
		const db = dbConnection.db(NODE_ENV);
		const collection = db.collection('posts');

		const tags = [...text.matchAll(tagRegex)].map((ele) => ele[0].replace('#', '').trim());

		await collection.insertOne({
			text,
			author: session.user.name,
			timestamp: Date.now(),
			tags
		});

		return { status: 200 };
	}
} satisfies Actions;

export const load: PageServerLoad = async ({}) => {
	const dbConnection = await clientPromise;
	const db = dbConnection.db(NODE_ENV);
	const collection = db.collection('posts');
	const posts = await collection.find({}).sort({ timestamp: -1 }).toArray();
	const p = JSON.parse(JSON.stringify(posts));

	return {
		posts: p
	};
};
