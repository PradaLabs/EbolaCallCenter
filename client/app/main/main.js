
angular.module('ebolaCallCenterApp')
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/main/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      }).when('/cases/', {
        templateUrl: 'app/cases/index.html',
        controller: 'CaseCtrl',
<<<<<<< HEAD
        // resolve: {
        //   cases: function($http) {
        //     return $http.get('/api/cases').then(function(response) {
        //       return response.data
        //     });
        //   }
        // }
      }).when('/',{
         templateUrl: 'app/login/login.html',
         controller: 'LoginCtrl',
        }).otherwise({
=======
        resolve: {
          cases: function($http) {
            return $http.get('/api/cases').then(function(response) {
              return response.data
            });
          }
        }
      }).otherwise({
>>>>>>> e56428992a7871e4d4a1322b14cef116bb41539b
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);;
  });
