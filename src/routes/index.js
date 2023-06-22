// Import Layout
// import { DefaultLayout, HeaderOnly } from '~/Layouts';

// Import Routes Configuration
import config from '../config';
// Import Pages
// import OTP from '../pages/OTP/OTP';
import Home from '../pages/Home';
import LoginComponent from '../pages/Login';
import SettingPage from '../pages/User/SettingPage';
// import ListUser from '../pages/ListUser';
// import Login from '../pages/Login';
// import NotFound from '../pages/NotFound';

//Public Route
const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
    },
    {
        path: config.routes.login,
        component: LoginComponent,
    }

];


// Private Route
const privateRoutes = [
    {
        path: config.routes.settingUser,
        component: SettingPage,
    },
    {
        path: config.routes.user,
        component: SettingPage,
    }

];

export {publicRoutes, privateRoutes}