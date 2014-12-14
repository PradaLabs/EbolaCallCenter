
angular.module('ebolaCallCenterApp')
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/main/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      }).when('/cases/', {
        templateUrl: 'app/cases/index.html',
        controller: 'CaseCtrl',
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
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);;
  });
