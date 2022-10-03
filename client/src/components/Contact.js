import { MdEmail } from "react-icons/md";
import "./Contact.css";

const Contact = () => {
	return (
		<div className="contact">
			<div className="contact-items">
				<h1>Contact us</h1>
				<p>↓</p>
				<a className="email" href="mailto:markquail@rogers.com">
					<MdEmail />
				</a>
			</div>
		</div>
	);
};

export default Contact;
