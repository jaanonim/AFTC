import Autolinker from 'autolinker';
import { tagRegex } from './tags';

function escapeOutput(text: string) {
	return text
		.replace(/\&/g, '&amp;')
		.replace(/\</g, '&lt;')
		.replace(/\>/g, '&gt;')
		.replace(/\"/g, '&quot;')
		.replace(/\'/g, '&#x27;');
}

function makeTags(text: string) {
	return text.replaceAll(tagRegex, '$1<span class="tag">$2</span>');
}

export function processPostText(text: string) {
	return makeTags(
		Autolinker.link(escapeOutput(text), {
			stripPrefix: false,
			stripTrailingSlash: false,
			truncate: Infinity
		})
	);
}
