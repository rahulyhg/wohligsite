// Link all the JS Docs here
var myApp = angular.module('myApp', [
    'ui.router',
    'pascalprecht.translate',
    'angulartics',
    'angulartics.google.analytics',
    'ui.bootstrap',
    'ngAnimate',
    'ngSanitize',
    'angular-flexslider',
    'ui.swiper',
    'angularPromiseButtons',
    'toastr'
]);

// Define all the routes below
myApp.config(function ($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
    var tempateURL = "views/template/template.html"; //Default Template URL

    // for http request with session
    $httpProvider.defaults.withCredentials = true;
    $stateProvider
        .state('home', {
            url: "/",
            templateUrl: tempateURL,
            controller: 'HomeCtrl'
        })
        .state('form', {
            url: "/form",
            templateUrl: tempateURL,
            controller: 'FormCtrl'
        })
        .state('grid', {
            url: "/grid",
            templateUrl: tempateURL,
            controller: 'GridCtrl'
        })

        .state('getintouch', {
            url: "/getintouch",
            templateUrl: tempateURL,
            controller: 'GetInTouchCtrl'
        })

        .state('privacy_policy', {
            url: "/privacy_policy",
            templateUrl: tempateURL,
            controller: 'PrivacyPolicyCtrl'
        })

        .state('Terms_condition', {
            url: "/Terms_condition",
            templateUrl: tempateURL,
            controller: 'Terms_conditionCtrl'
        })


        .state('grid12', {
            url: "/grid12",
            templateUrl: tempateURL,
            controller: 'GridCtrl'
        })
        .state('client_page', {
            url: "/client_page",
            templateUrl: tempateURL,
            controller: 'ClientPageCtrl'
        })

        .state('wohlig_home_page', {
            url: "/wohlig_home_page",
            templateUrl: tempateURL,
            controller: 'WohligHomePageCtrl'
        })


        .state('apply', {
            url: "/apply",
            templateUrl: tempateURL,
            controller: 'Applyctrl'
        })

        .state('services', {
            url: "/services",
            templateUrl: tempateURL,
            controller: 'ServicesCtrl'
        })


        .state('about_us', {
            url: "/about_us",
            templateUrl: tempateURL,
            controller: 'AboutUsCtrl'
        })

    $urlRouterProvider.otherwise("/");
    $locationProvider.html5Mode(isproduction);
});

// For Language JS
myApp.config(function ($translateProvider) {
    $translateProvider.translations('en', LanguageEnglish);
    $translateProvider.translations('hi', LanguageHindi);
    $translateProvider.preferredLanguage('en');
});