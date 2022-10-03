import { useEffect, useState } from "react";
import api from "../../api";
import RecordList from "./RecordList";
import ErrorMessage from "../ErrorMessage";
import "./RecordPage.css";

const RecordPage = () => {
	const [error, setError] = useState(false);
	const [records, setRecords] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				setError(false);
				const result = await api.getRecordImages();
				if (!result.ok) {
					throw new Error("API Error");
				}
				const data = await result.json();
				setRecords(data);
			} catch (err) {
				setError(true);
			}
		};
		fetchData();
	}, []);

	return (
		<main className="records-container">
			<h1 className="records-page-title">Records</h1>
			{error && <ErrorMessage message="Error fetching records" />}
			<RecordList records={records} className="records-content" />
		</main>
	);
};

export default RecordPage;
