/**
 * Created by aa wq 2016/4/29.
 */

app.run(
        ['$rootScope', '$state', '$stateParams',
            function ($rootScope,   $state,   $stateParams) {
                $rootScope.$state = $state;
                $rootScope.$stateParams = $stateParams;
            }
        ]
    )
    .config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise('/app');
        $stateProvider
            .state("app",{
                //abstract:true,
                url:"/app",
                views:{
                    '':{
                        templateUrl:'view/app.html'
                    },
                    'nav-shop@app':{
                        templateUrl:'view/shop_navigation.html',
                        css:'css/view/shop_navigation.css'
                        // resolve:{
                        //     deps:['$ocLazyLoad',function($ocLazyLoad){
                        //         // files:{'css/view/shop_navigation.css'}
                        //         return $ocLazyLoad.load('css/view/shop_navigation.css');
                        //     }]
                        // }
                    }
                }
            })
            .state("app.product",{
                url:"/product",
                templateUrl:"view/product.html",
                controller:"frontProduct",
                resolve:{
                    deps:['$ocLazyLoad',function($ocLazyLoad){
                        return $ocLazyLoad.load('js/view/front.product.js').then(
                            function(){
                                return $ocLazyLoad.load('js/view/tpl/product.resource.js');
                            }
                        )
                    }]
                }
            })
    }])