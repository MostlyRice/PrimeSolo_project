var myApp = angular.module('myApp', ['ngRoute','ngMaterial', 'ngAria', 'ngMessages']);

/// Routes ///
myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  console.log('myApp -- config')
  $routeProvider
    .when('/', {
      redirectTo: 'home'
    })
    .when('/home', {
      templateUrl: '/views/templates/home.html',
      controller: 'LoginController as vm',
    })
    .when('/search', {
      templateUrl: '/views/templates/search.html',
      controller: 'cardController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/havelist', {
      templateUrl: '/views/templates/havelist.html',
      controller: 'listController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/trades', {
      templateUrl: '/views/templates/trades.html',
      controller: 'listController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/wishlist', {
      templateUrl: '/views/templates/wishlist.html',
      controller: 'listController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/register', {
      templateUrl: '/views/templates/register.html',
      controller: 'LoginController as vm'
    })
    .when('/user', {
      templateUrl: '/views/templates/user.html',
      controller: 'UserController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/info', {
      templateUrl: '/views/templates/info.html',
      controller: 'InfoController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .otherwise({
      template: '<h1>404</h1>'
    });
}]);
