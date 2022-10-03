import { Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import RecordInfoPage from "./components/records/RecordInfoPage";
import RecordPage from "./components/records/RecordPage";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

const App = () => {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route exact path="/" element={<About />} />
				<Route exact path="/records" element={<RecordPage />} />
				<Route path="/records/catalog/:id" element={<RecordInfoPage />} />
				<Route exact path="/contact" element={<Contact />} />
			</Routes>
			<Footer />
		</div>
	);
};

export default App;
