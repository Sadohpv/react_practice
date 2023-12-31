// Import Layout
// import { DefaultLayout, HeaderOnly } from '~/Layouts';

// Import Routes Configuration
import config from "../config";
// Import Pages
// import OTP from '../pages/OTP/OTP';
import Home from "../pages/Home";
import LoginComponent from "../pages/Login";
import RegisterPage from "../pages/Register";
import ProfilePage from "../pages/User/ProfilePage";
// import ListUser from '../pages/ListUser';
// import Login from '../pages/Login';
// import NotFound from '../pages/NotFound';
import EditPage from "../pages/User/EditPage";
import ConfigurePage from "../pages/User/ConfigurePage";
import DefaultLayout from "../components/Layout/DefaultLayout";
import UserSettingPageLayout from "../components/Layout/UserSettingPageLayout";
import HomeLayout from "../components/Layout/HomeLayout";
import ElectricSpider from "../pages/Games/ElectricSpider";
import ProfileLayout from "../components/Layout/ProfileLayout";
import FriendPage from "../pages/Friend";
import PostPage from "../pages/PostPage";
import NotFoundPage from "../pages/NotFound";
import PhotoPage from "../pages/PhotoPage";
// import FullPost from '../components/Post/FullPost';
import FullPostPage from "../pages/FullPostPage";
import FriendListLayout from "../components/Layout/FriendListLayout";
import FriendResponsePage from "../pages/FriendList/Response";
import FriendRequestPage from "../pages/FriendList/Request";
import FriendRecommendPage from "../pages/FriendList/Recommend";
import SavedPage from "../pages/SavedPage";
//Public Route
const publicRoutes = [
	{
		path: config.routes.login,
		component: LoginComponent,
		layout: null,
	},
	{
		path: config.routes.register,
		component: RegisterPage,
		layout: null,
	},
	{
		path: config.routes.notFound,
		component: NotFoundPage,
		layout: null,
	},
];

// Private Route
const privateRoutes = [
	{
		path: config.routes.home,
		component: Home,
		layout: HomeLayout,
	},
	{
		path: config.routes.user,
		component: ProfilePage,
		layout: ProfileLayout,
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
	{
		path: config.routes.friend,
		component: FriendPage,
		layout: ProfileLayout,
	},
	{
		path: config.routes.post,
		component: PostPage,
		layout: ProfileLayout,
	},
	{
		path: config.routes.photo,
		component: PhotoPage,
		layout: ProfileLayout,
	},
	{
		path: config.routes.saved,
		component: SavedPage,
		layout: ProfileLayout,
	},
	{
		path: config.routes.fullPost,
		component: FullPostPage,
		layout: DefaultLayout,
	},
	{
		path: config.routes.friendList,
		component: FriendResponsePage,
		layout: FriendListLayout,
	},
	{
		path: config.routes.friendRequest,
		component: FriendRequestPage,
		layout: FriendListLayout,
	},
	{
		path: config.routes.friendRecommend,
		component: FriendRecommendPage,
		layout: FriendListLayout,
	},
];

export { publicRoutes, privateRoutes };
