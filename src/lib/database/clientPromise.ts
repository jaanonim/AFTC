// src/lib/database/clientPromise.js

// This approach is taken from https://github.com/vercel/next.js/tree/canary/examples/with-mongodb
import { MongoClient } from 'mongodb';
import { NODE_ENV, MONGODB_URI } from '$env/static/private';

if (!MONGODB_URI) {
	throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const uri = MONGODB_URI;
const options = {};

let client;
let clientPromise: Promise<MongoClient>;

if (NODE_ENV === 'development') {
	// In development mode, use a global variable so that the value
	// is preserved across module reloads caused by HMR (Hot Module Replacement).
	const g = global as any;
	if (!g._mongoClientPromise) {
		client = new MongoClient(uri, options);
		g._mongoClientPromise = client.connect();
	}
	clientPromise = g._mongoClientPromise;
} else {
	// In production mode, it's best to not use a global variable.
	client = new MongoClient(uri, options);
	clientPromise = client.connect();
}

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise;