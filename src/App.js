import { Navigate, Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./routes";
import PrivateRoute from "./routes/privateRoute";
import DefaultLayout from "./components/Layout/DefaultLayout";
import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { handleRefreshWebRedux } from "./redux/actions/userAction";
import { Fragment } from "react"; // Thẻ chứa không sinh ra thẻ thật trong dom

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(handleRefreshWebRedux());
	}, []);
	return (
		<div className="App">
			{/* <Navbar /> */}

			<Routes>
				{publicRoutes.map((route, index) => {
					const Page = route.component;

					let Layout = DefaultLayout;
					if (route.layout) {
						Layout = route.layout;
					} else if (route.layout === null) {
						Layout = Fragment;
					}

					return (
						<Route
							key={index}
							path={route.path}
							element={
								// <ErrorBoundary>
								<Layout>
									<Page />
								</Layout>
								/* </ErrorBoundary> */
							}
						/>
					);
				})}
				{privateRoutes.map((route, index) => {
					const Page = route.component;
					let Layout = DefaultLayout;
					if (route.layout) {
						Layout = route.layout;
					} else if (route.layout === null) {
						Layout = Fragment;
					}
					return (
						<Route
							key={index}
							path={route.path}
							element={
								<PrivateRoute>
									<Layout>
										<Page />
									</Layout>
								</PrivateRoute>
							}
						/>
					);
				})}
				<Route path="/*" element={<Navigate to="/404" replace />} />
			</Routes>
		</div>
	);
}

export default App;
