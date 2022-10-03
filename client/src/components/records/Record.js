import { Link } from "react-router-dom";

const Record = ({ id, name, catalog_number }) => {
	return (
		<li className="record">
			<div className="card">
				<div>
					<img
						src={`./img/${name}`}
						alt={catalog_number}
						className="record-image"
					/>
				</div>
				<h3>{catalog_number}</h3>
				<p>
					<Link to={`/records/catalog/${id}`}>View Record →</Link>
				</p>
			</div>
		</li>
	);
};

export default Record;
