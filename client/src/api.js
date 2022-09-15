const api = {
	getRecordImages: async () =>
		await fetch(`${process.env.REACT_APP_API_URL}/records`),

	getRecordsByCatalogNumber: async (catalog_number) => {
		await fetch(
			`${process.env.REACT_APP_API_URL}/records/catalog?catalog_number=${catalog_number}`
		);
	},
};

export default api;
