import "./App.css";
import "./styles/portfolio.css";
import {
	createBrowserRouter,
	RouterProvider,
	useNavigate,
	Router,
	BrowserRouter,
} from "react-router-dom";
import Home from "./pages/home";
import Header from "./components/header";

export const App = () => {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Home />,
		},
		{
			path: "/profile",
			element: <Home />,
		},
	]);

	return (
		<>
			<Header />
			<RouterProvider router={router} />
		</>
	);
};

export default App;
