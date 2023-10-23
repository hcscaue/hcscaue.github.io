import "./App.css";
import "./styles/portfolio.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Header from "./components/header";
import Links from "./pages/links";
import BackToTopButton from "./components/backToTop_button";

export const App = () => {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Home />,
		},
		{
			id: "links",
			path: "/links",
			element: <Links />,
		},
	]);

	return (
		<>
			{window.location.pathname != "/links" ? <Header /> : null}
			<RouterProvider router={router} />
			<BackToTopButton />
		</>
	);
};

export default App;
