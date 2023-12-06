import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export function load(event) {
	try {
		throw new Error('404', 'Not Found');
	} catch (error) {
		console.error('Error occurred:', error);
		// Log the error or handle it in some way
		// You can also re-throw the error if needed
		throw error;
	}
}