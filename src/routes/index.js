// Import Layout
// import { DefaultLayout, HeaderOnly } from '~/Layouts';

// Import Routes Configuration
import config from '../config';
// Import Pages
// import OTP from '../pages/OTP/OTP';
import Home from '../pages/Home';
// import ListUser from '../pages/ListUser';
// import Login from '../pages/Login';
// import NotFound from '../pages/NotFound';

//Public Route
const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
    },

];


// Private Route
const privateRoutes = [
 
];

export {publicRoutes, privateRoutes}