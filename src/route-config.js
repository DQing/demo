'use strict';

export default function (router) {
    router.map({
        '/': {
            name: 'home',
            component: (resolve) => {
                require(['./views/index/app.vue'], resolve)
            }
        },
        '/dailyUse': {
            name: 'dailyUse',
            component: (resolve) => {
                require(['./views/goodsSort/dailyUse.vue'], resolve)
            }
        },
        '/lease': {
            name: 'lease',
            component: (resolve) => {
                require(['./views/goodsSort/lease.vue'], resolve)
            }
        },
        '/books': {
            name: 'books',
            component: (resolve) => {
                require(['./views/goodsSort/books.vue'], resolve)
            }
        },
        '/digitalElectronics': {
            name: 'digitalElectronics',
            component: (resolve) => {
                require(['./views/goodsSort/digitalElectronics.vue'], resolve)
            }
        },
        '/others': {
            name: 'others',
            component: (resolve) => {
                require(['./views/goodsSort/others.vue'], resolve)
            }
        },
        '/app': {
            name: 'app',
            component: (resolve) => {
                require(['./views/goodsInfo/app.vue'], resolve)
            }
        },
        '/index': {
            name: 'index',
            component: (resolve) => {
                require(['./views/index/app.vue'], resolve)

            }
        },
        '/lose': {
            name: 'lose',
            component: (resolve) => {
                require(['./views/lose/app.vue'], resolve)

            }
        }
    })
}