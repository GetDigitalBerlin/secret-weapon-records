import Record from "./Record";

const RecordList = ({ records, className }) => {
	return (
		<ul className={className}>
			{records.map((record) => (
				<Record
					key={record.id}
					id={record.id}
					name={record.name}
					catalog_number={record.catalog_number}
				/>
			))}
		</ul>
	);
};

export default RecordList;
