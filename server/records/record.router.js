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
		const { id } = req.query;
		const recordsById = await recordRepository.getRecordsById(id);

		return res.json(recordsById);
	} catch (err) {
		next(err);
	}
});

module.exports = router;
