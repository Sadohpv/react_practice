
import { Alert } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import {  useNavigate } from "react-router";
import { Navigate } from "react-router-dom";
import AtomicSpinner from "atomic-spinner";
function PrivateRoute({ children }) {
	const auth = useSelector((state) => state.user.auth);
	const loading =useSelector((state) => state.user.isLoading);
	
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
			) : (
			// {auth ? (
				children
			// ) : (
			// 	<Alert variant="warning" className="w-75 mt-3 mx-auto">
			// 		<Alert.Heading>404 Page! You got an Error!</Alert.Heading>
			// 		<p>You have no permission to access this route! Please LOGIN first</p>
			// 		<Navigate to="/login">
					
			// 		</Navigate>
			// 	</Alert>
				
			
			)}
			
		</>
	);
}

export default PrivateRoute;
