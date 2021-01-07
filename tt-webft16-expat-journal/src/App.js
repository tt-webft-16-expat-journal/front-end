import { Route } from "react-router-dom";
import Nav from "./Components/Navbar";
import SignUp from "./Components/SignUp";
import LoginForm from "./Components/Login";
import Home from "./Components/Home";
// import PrivateRoute from "./Components/PrivateRoute";
import "./App.css";

function App() {
	return (
		<div className="App">
			<h2>Hello World.</h2>
			<Nav />
			<Route path="/signup" component={SignUp} />
			<Route path="/login" component={LoginForm} />
			<Route path="/home" component={Home} />
		</div>
	);
}

export default App;
