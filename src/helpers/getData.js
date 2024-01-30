export const getData = async (url) => {
	try {
		const res = await fetch(url);

		if (!res.ok) throw { status: res.status, statusText: res.statusText };

		const data = await res.json();
		
		return data;
	} catch (err) {
		let message = err.statusText || 'Ocurrió un error';
		console.log(`Error ${err.status}: ${message}`);
	}
};
