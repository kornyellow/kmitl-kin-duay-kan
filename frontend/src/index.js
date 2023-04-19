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
import SignIn from "./routes/authentication/SignIn";
import SignUp from "./routes/authentication/SignUp";
import Orders from "./routes/main/Orders";
import Profile from "./routes/main/Profile";
import TopScore from "./routes/main/TopScore";

const BackendServer = "http://localhost:5002";
export default BackendServer;

const router = createBrowserRouter([
	{
		path: "/",
		element: <MainRoot/>,
		errorElement: <ErrorPageNotFound/>,
		children: [
			{path: "", element: <Home/>},
			{path: "home", element: <Home/>},
			{path: "orders", element: <Orders/>},
			{path: "top-score", element: <TopScore/>},
			{path: "profile", element: <Profile/>},
		],
	},
	{
		path: "/sign",
		element: <AuthenticationRoot/>,
		errorElement: <ErrorPageNotFound/>,
		children: [
			{path: "", element: <SignIn/>},
			{path: "in", element: <SignIn/>},
			{path: "up", element: <SignUp/>},
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<RouterProvider router={router}/>
	</React.StrictMode>
);