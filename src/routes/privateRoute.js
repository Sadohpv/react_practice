
import { Alert } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router";
function PrivateRoute({ children }) {
	const user = useSelector((state) => state.user.token);
	const navigate = useNavigate();
	useEffect(()=>{
		if(user===null){
			navigate('/login');
		}
	},[])
	return (
		<>
			{user ? (
				children
			) : (
				<Alert variant="warning" className="w-75 mt-3 mx-auto">
					<Alert.Heading>404 Page! You got an Error!</Alert.Heading>
					<p>You have no permission to access this route! Please LOGIN first</p>
				</Alert>
			)}
		</>
	);
}

export default PrivateRoute;
