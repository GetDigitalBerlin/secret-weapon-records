import "./DarkMode.css";

const setDark = () => {
	// 2
	localStorage.setItem("theme", "dark");

	// 3
	document.documentElement.setAttribute("data-theme", "dark");
};

const setLight = () => {
	localStorage.setItem("theme", "light");
	document.documentElement.setAttribute("data-theme", "light");
};

// 4
const storedTheme = localStorage.getItem("theme");

const prefersDark =
	window.matchMedia &&
	window.matchMedia("(prefers-color-scheme: dark)").matches;

const defaultDark =
	storedTheme === "dark" || (storedTheme === null && prefersDark);

if (defaultDark) {
	setDark();
}

// 5
const toggleTheme = (e) => {
	if (e.target.checked) {
		setDark();
	} else {
		setLight();
	}
};

const DarkMode = () => {
	return (
		<div className="toggleWrapper">
			<input
				type="checkbox"
				className="dn"
				id="dn"
				onChange={toggleTheme}
				defaultChecked={defaultDark}
			/>
			<label htmlFor="dn" className="toggle">
				<span className="toggle__handler">
					<span className="crater crater--1"></span>
					<span className="crater crater--2"></span>
					<span className="crater crater--3"></span>
				</span>
				<span className="star star--1"></span>
				<span className="star star--2"></span>
				<span className="star star--3"></span>
				<span className="star star--4"></span>
				<span className="star star--5"></span>
				<span className="star star--6"></span>
			</label>
		</div>
	);
};

export default DarkMode;
