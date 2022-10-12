import { useState } from "react";
import { BsFilterRight, BsX } from "react-icons/bs";
import { Link } from "react-router-dom";
import DarkMode from "./DarkMode";
import "./Header.css";

const Header = () => {
	const [nav, setNav] = useState(false);
	const handleNav = () => setNav(!nav);

	return (
		<>
			<header>
				<nav name="top" className="navbar">
					<div className="container" onClick={handleNav}>
						<ul className={nav ? "nav-menu active" : "nav-menu"}>
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/records">Records</Link>
							</li>
							<li>
								<Link to="/contact">Contact</Link>
							</li>
						</ul>
						<div className="hamburger" onClick={handleNav}>
							{!nav ? (
								<BsFilterRight className="icon" />
							) : (
								<BsX className="icon" />
							)}
						</div>
						<DarkMode />
					</div>
				</nav>
			</header>
		</>
	);
};

export default Header;
