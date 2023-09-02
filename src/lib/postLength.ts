export const minPostLength = 1;
export const maxPostLength = 120;

export const isValidPostLength = (text: string) =>
	text.length < minPostLength || text.length > maxPostLength;
