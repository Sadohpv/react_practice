import { Navigate, Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./routes";
import PrivateRoute from "./routes/privateRoute";
import DefaultLayout from "./components/Layout/DefaultLayout";
import "./App.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleRefreshWebRedux } from "./redux/actions/userAction";
import { Fragment } from "react"; // Thẻ chứa không sinh ra thẻ thật trong dom
import CloudRain from "./components/Temp/CloudRain";
import { CLOUD_RAIN } from "./utils/constant";
// import { emitter } from "./utils/emitter";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
function App() {
	const dispatch = useDispatch();
	const currentTheme = useSelector((state) => state.app.theme);

	const cloudShow = useSelector((state) => state.app.cloud_rain);

	useEffect(() => {
		dispatch(handleRefreshWebRedux());
	}, []);

	// useEffect(()=>{
	// 	if(cloudShow === CLOUD_RAIN.OFF){
	// 		emitter.on('CLEAR_INTERVAL',interval=>{
	// 			clearInterval(interval);
	// 			console.log("Here");
	// 		});
	// 	}
	// },[cloudShow])
	

	return (
		<div className="App" theme={currentTheme}>
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
			{cloudShow === CLOUD_RAIN.ON && <CloudRain />}
			<ToastContainer/>
		</div>
	);
}

export default App;
