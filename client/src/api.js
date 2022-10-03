const api = {
	getRecordImages: async () =>
		await fetch(`${process.env.REACT_APP_API_URL}/records`),

	getRecordsById: async (id) =>
		await fetch(`${process.env.REACT_APP_API_URL}/records/catalog?id=${id}`),
};
export default api;
