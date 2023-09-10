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
import ConfigurePage from '../pages/User/ConfigurePage'; 
import DefaultLayout from '../components/Layout/DefaultLayout';
import UserSettingPageLayout from '../components/Layout/UserSettingPageLayout';
import HomeLayout from '../components/Layout/HomeLayout';
import ElectricSpider from '../pages/Games/ElectricSpider';
//Public Route
const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
        layout: HomeLayout,
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
        path: config.routes.configure,
        component: ConfigurePage,
        layout: UserSettingPageLayout,
    },
    {
        path: config.routes.security,
        component: ConfigurePage,
        layout: UserSettingPageLayout,
    },
    {
        path: config.routes.ElectricSpider,
        component: ElectricSpider,
        layout: DefaultLayout,
    },

];

export {publicRoutes, privateRoutes}