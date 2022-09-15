const express = require("express");
const router = express.Router();
const recordRepository = require("./record.repository");

router.get("/", async (req, res, next) => {
	try {
		const recordImages = await recordRepository.getRecordImages();
		return res.json(recordImages);
	} catch (err) {
		next(err);
	}
});

router.get("/catalog", async (req, res, next) => {
	try {
		const { catalog_number } = req.query;
		const recordsByCatalogNumber =
			await recordRepository.getRecordsByCatalogNumber(catalog_number);
		return res.json(recordsByCatalogNumber);
	} catch (err) {
		next(err);
	}
});

module.exports = router;
