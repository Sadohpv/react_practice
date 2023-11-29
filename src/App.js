import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
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
import "react-toastify/dist/ReactToastify.css";
import { userService } from "./services";
import React from "react";
// import AtomicSpinner from "atomic-spinner";
import { Flip } from 'react-toastify';
function App() {
	const dispatch = useDispatch();
	const currentTheme = useSelector((state) => state.app.theme);

	const cloudShow = useSelector((state) => state.app.cloud_rain);
	const loading = useSelector((state) => state.user.isLoading);
	const auth = useSelector((state) => state.user.auth);
	// console.log(auth);
	// console.log(loading);
	const navigate = useNavigate();
	useEffect(() => {
		document.title="Z i i k";
		async function fetchData() {
			let res = await userService.handleGetAccounService();
			// console.log(res);
			if (res !== 400) {
				if (res.status !== 401) {
					if (res.reg) {
						// console.log("Here");

						dispatch(handleRefreshWebRedux(res.reg.userData.idUser, false, true));
					}
				} else {
					// console.log("Here");
					dispatch(handleRefreshWebRedux(null, false, false));
				}
			} else {
				// console.log("Here");
				dispatch(handleRefreshWebRedux(null, null, false));
			}
		}
		fetchData();
	}, []);

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
					// }
				})}
				<Route path="/*" element={<Navigate to="/404" replace />} />
			</Routes>

			{cloudShow === CLOUD_RAIN.ON && <CloudRain />}
			<ToastContainer  transition={Flip} hideProgressBar limit={3} pauseOnFocusLoss={false} pauseOnHover={false}/>
		</div>
	);
}

export default App;
