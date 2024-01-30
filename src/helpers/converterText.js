export const converterText = (text, converter = ' ', converterTo = '%20') => {
	const regex = new RegExp(converter, 'gi');
	return text.replace(regex, converterTo);
};
