const db = require("../db");

getRecordImagesSQL = `SELECT * FROM record_image`;

getRecordsByCatalogNumberSQL = `SELECT
record_id,
catalog_number,
artists,
album_title,
track_artists,
song_titles,
release_date,
title_version,
genre
FROM record
WHERE 
catalog_number = $1
ORDER BY
record_id
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
	getRecordsByCatalogNumber: async (catalog_number) => {
		try {
			const catalogNumber = catalog_number.toUpperCase();
			const result = await db.query(getRecordsByCatalogNumberSQL, [
				catalogNumber,
			]);
			return result.rows;
		} catch (error) {
			throw Error(error);
		}
	},
};
