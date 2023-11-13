import { FETCH_NOTIFY,READ_NOTIFY,NUMBER_NOTIFY} from "../actions/notifyAction";
// import { userService } from "../../services";
const INITIAL_STATE = {
	notifyData: [],
	numberNotify : 0,
};

const notifyReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {

		case FETCH_NOTIFY:

			// console.log(action.data);
			// console.log("Login");
			return {
				...state,
                notifyData :action.data.notify,
				
			};
        case READ_NOTIFY:
            // console.log(action.data.index)
            state.notifyData[action.data.index].status = 1; 
            return {
				...state,
               
				
			};
        case NUMBER_NOTIFY:
                return {
                    ...state,
                    numberNotify : action.data.number,
                    
                };  
        default:
                // console.log("Default");
                // console.log(state);
    
                return state;
        }
    };
    
    export default notifyReducer;