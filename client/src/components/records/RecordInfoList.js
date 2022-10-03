import RecordInfo from "./RecordInfo";

const RecordInfoList = ({ recordInfo }) => {
	return (
		<ul className="record-info-list">
			{recordInfo.map((info) => (
				<RecordInfo
					key={info.id}
					artists={info.artists}
					album_title={info.album_title}
					release_date={info.release_date}
					track_artist={info.track_artist}
					song_titles={info.song_titles}
					image_name={info.image_name}
				/>
			))}
		</ul>
	);
};

export default RecordInfoList;
