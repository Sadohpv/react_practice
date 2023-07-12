// Import Layout
// import { DefaultLayout, HeaderOnly } from '~/Layouts';

// Import Routes Configuration
import config from '../config';
// Import Pages
// import OTP from '../pages/OTP/OTP';
import Home from '../pages/Home';
import LoginComponent from '../pages/Login';
import RegisterPage from '../pages/Register';
import ProfilePage from '../pages/User/ProfilePage';
// import ListUser from '../pages/ListUser';
// import Login from '../pages/Login';
// import NotFound from '../pages/NotFound';
import EditPage from '../pages/User/EditPage';
import ProtectedPage from '../pages/User/ProtectedPage'; 
import DefaultLayout from '../components/DefaultLayout';
import UserSettingPageLayout from '../components/UserSettingPageLayout';
//Public Route
const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
        layout: DefaultLayout,
    },
    {
        path: config.routes.login,
        component: LoginComponent,
        layout: null,
    },
    {
        path: config.routes.register,
        component: RegisterPage,
        layout: null,
    }

];


// Private Route
const privateRoutes = [
    {
        path: config.routes.user,
        component: ProfilePage,
        layout: DefaultLayout,
    },
    {
        path: config.routes.edit,
        component: EditPage,
        layout: UserSettingPageLayout,
    },
    {
        path: config.routes.protected,
        component: ProtectedPage,
        layout: null,
    },
    {
        path: config.routes.security,
        component: ProtectedPage,
        layout: null,
    },

];

export {publicRoutes, privateRoutes}