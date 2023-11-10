import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/home";
import Signup from "./components/pages/signup";
import Login from "./components/pages/login";
import About from "./components/about";
import Pickup from "./components/pickup";
import Products from "./components/products";

function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			{user && <Route path="/" exact element={<Home />} />}
			{user && <Route path="/about" exact element={<About />} />}
			{user && <Route path="/pickup" exact element={<Pickup />} />}
			{user && <Route path="/products" exact element={<Products />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
			<Route path="/home" element={<Navigate replace to="/login" />} />
			<Route path="/about" element={<Navigate replace to="/login" />} />
			<Route path="/pickup" element={<Navigate replace to="/login" />} />
			<Route path="/products" element={<Navigate replace to="/login" />} />
		</Routes>
	);
}

export default App;
