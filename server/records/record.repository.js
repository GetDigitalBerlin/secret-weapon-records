const db = require("../db");

getRecordImagesSQL = `SELECT * FROM record_image`;

getRecordsByIdSQL = `SELECT *
FROM records
WHERE 
id = $1
ORDER BY
id
`;

module.exports = {
	getRecordImages: async () => {
		try {
			const result = await db.query(getRecordImagesSQL);
			return result.rows;
		} catch (error) {
			throw Error(error);
		}
	},
	getRecordsById: async (id) => {
		try {
			const result = await db.query(getRecordsByIdSQL, [id]);
			return result.rows;
		} catch (error) {
			throw Error(error);
		}
	},
};
