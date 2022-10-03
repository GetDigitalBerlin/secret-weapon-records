import "./RecordInfoPage.css";
import { useState, useEffect } from "react";
import RecordInfoList from "./RecordInfoList";
import api from "../../api";
import { useParams } from "react-router-dom";
import ErrorMessage from "../ErrorMessage";

const RecordInfoPage = () => {
	const { id } = useParams();
	const [recordInfo, setRecordInfo] = useState([]);
	const [error, setError] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const result = await api.getRecordsById(id);
				if (!result.ok) {
					throw new Error("API Error");
				}
				const data = await result.json();
				setRecordInfo(data);
			} catch (err) {
				setError(true);
			}
		};
		fetchData();
	}, [id]);

	return (
		<div className="record-info-container">
			{error && <ErrorMessage message="Error fetching record info" />}
			<RecordInfoList recordInfo={recordInfo} />
		</div>
	);
};

export default RecordInfoPage;
