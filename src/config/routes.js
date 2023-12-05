
const routesConfig = {
    home: '/',
    login: '/login',
    register: '/register',
    notFound: '/404',
    fullPost : '/post/:idPost',
    friendList: '/friend',
    friendRequest: '/friend/request',
    friendRecommend: '/friend/recommend',

    user: '/:idUser',
    edit: '/:idUser/detail',
    friend : '/:idUser/friend',
    post : '/:idUser/post',
    saved : '/:idUser/saved',

    photo : '/:idUser/photo',
    configure : '/:idUser/configure',
    security : '/:idUser/security',
    ElectricSpider: '/games/spider',

}

export default routesConfig;