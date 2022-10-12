import { formatDate } from "../utils/formatDate";
import { SiSpotify, SiBeatport } from "react-icons/si";

const RecordInfo = ({
	id,
	artists,
	album_title,
	release_date,
	track_artist,
	song_titles,
	image_name,
}) => {
	const results = track_artist.map((artist, i) => ({
		artist,
		title: song_titles[i],
	}));
	return (
		<>
			<img
				src={`/img/${image_name}`}
				alt={image_name}
				className="record-info-image"
			/>
			<li className="record-info">
				<h2>{album_title}</h2>
				<p key={id}>{artists}</p>
				<ol className="track-info-list">
					{results.map(({ artist, title }) => (
						<li key={id} className="track-info">
							{artist} - {title}
						</li>
					))}
				</ol>
				<p>released: {formatDate(release_date)}</p>
				<div className="music-links">
					<a
						href="https://open.spotify.com/playlist/6eHFfiG6RauuIfG0Zmh4qv?si=fuI4eHyhTMSlKD
QMlLNgdg"
						target="_blank"
						rel="noreferrer"
					>
						<SiSpotify />
					</a>
					<a
						href="https://www.beatport.com/label/secret-weapon-records/423"
						target="_blank"
						rel="noreferrer"
					>
						<SiBeatport />
					</a>
				</div>
			</li>
		</>
	);
};

export default RecordInfo;
