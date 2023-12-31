import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter } from "react-router-dom";

import store from "./redux/store";

import { Provider } from "react-redux";
import GlobalStyles from "./components/GlobalStyles";
// import {persistor} from './redux'

import IntlProviderWrapper from "./hook/IntlProviderWrapper";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<Provider store={store}>
		<React.StrictMode>
			<BrowserRouter>
				<IntlProviderWrapper>
					<GlobalStyles>
						<App />
					</GlobalStyles>
				</IntlProviderWrapper>
			</BrowserRouter>
		</React.StrictMode>
	</Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
