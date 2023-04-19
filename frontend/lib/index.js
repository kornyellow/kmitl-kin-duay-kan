import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "animate.css/animate.min.css";
import "./style.css";
import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainRoot from "./routes/main/MainRoot";
import ErrorPageNotFound from "./routes/ErrorPageNotFound";
import Home from "./routes/main/Home";
import AuthenticationRoot from "./routes/authentication/AuthenticationRoot";
import Login from "./routes/authentication/Login";
import Register from "./routes/authentication/Register";

const router = createBrowserRouter([{
	path: "/",
	element: <MainRoot/>,
	errorElement: <ErrorPageNotFound/>,
	children: [{
		path: "",
		element: <Home/>
	}]
}, {
	path: "/login",
	element: <AuthenticationRoot/>,
	errorElement: <ErrorPageNotFound/>,
	children: [{
		path: "",
		element: <Login/>
	}, {
		path: "register",
		element: <Register/>
	}]
}]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode>
	<RouterProvider router={router}/>
</React.StrictMode>);