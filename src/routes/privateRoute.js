// import { Alert } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useEffect } from "react";
// import { useNavigate } from "react-router";
// import { Navigate } from "react-router-dom";
import AtomicSpinner from "atomic-spinner";
import NotFoundPage from "../pages/NotFound";
function PrivateRoute({ children }) {
	const auth = useSelector((state) => state.user.auth);
	const loading = useSelector((state) => state.user.isLoading);
	console.log(loading);
	return (
		<>
			{loading === true ? (
				<div>
					<AtomicSpinner
						displayElectronPaths={true}
						electronColorPalette={["#68ccc4", "#49bcd6", "#b050ea"]}
						electronPathColor={"#00000047"}
					/>
				</div>
			) : auth ? (
				children
			) : (
				<NotFoundPage />
			)}
		</>
	);
}

export default PrivateRoute;
