import { Route } from "react-router-dom";
import Nav from "./Components/Navbar";
import SignUp from "./Components/SignUp";
import LoginForm from "./Components/Login";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import PrivateRoute from "./Components/PrivateRoute";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Nav />
			<Route path="/signup" component={SignUp} />
			<Route path="/login" component={LoginForm} />
			<PrivateRoute path="/home" component={Home} />
			<Footer />
		</div>
	);
}

export default App;
