import "./About.css";
import { GiShuriken } from "react-icons/gi";

const About = () => {
	return (
		<div className="about-container">
			<div className="logo">
				<GiShuriken className="icon" />
				<h1 className="label-name">Secret Weapon Records</h1>
			</div>
			<div className="about-description">
				<p>
					Formed in 2001, Secret Weapon Records is a purveyor of the
					four-on-the-floor techno sound that has roots in the Great Lakes
					Region of North America (Toronto/Detroit/Chicago) and has spread
					around the world. The music reflects the sounds of the electronic age
					as it crashed up on the age of heavy machinery. The label has hosted a
					wide array of artists including Chicago veteran L.A Williams (under
					his German Broadcasters moniker); studio mastermind Adam K, Poland’s
					unstoppable Greg Kobe, Juno award (Canada’s Grammys) nominees Arthur
					Oskan and Noah Pred and label boss Mark Quail (under numerous
					pseudonyms: Samoan Attorney, The Attorney General and in collaboration
					with Plus 8 Records alumnus Himadri, under the name The Diamond Dogs).
				</p>
			</div>
		</div>
	);
};

export default About;
