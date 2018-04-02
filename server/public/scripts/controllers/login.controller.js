myApp.controller('LoginController', ['$http', '$location', 'UserService', function($http, $location, UserService) {
    console.log('LoginController created');
    var self = this;
    self.user = {
      username: '',
      password: ''
    };
    self.message = '';

    self.login = function () {
      if (self.user.username === '' || self.user.password === '') {
        self.message = "Enter your username and password!";
      } else {
        console.log('sending to server...', self.user);
        $http.post('/api/user/login', self.user).then(
          function (response) {
            if (response.status == 200) {
              swal("You have been logged in!","", "success")
              console.log('success: ', response.data);
              // location works with SPA (ng-route)
              $location.path('/user');
            } else {
              console.log('failure error: ', response);
              swal("Incorrect credentials.","Please try again.", "error")
            }
          },
          function (response) {
            console.log('failure error: ', response);
            swal("Incorrect credentials.","Please try again.", "error")
          });
      }
    };
    self.registerUser = function () {
      if (self.user.username === '' || self.user.password === '') {
        self.message = "Choose a username and password!";
      } else {
        console.log('sending to server...', self.user);
        $http.post('/api/user/register', self.user).then(function (response) {
          swal("You have been registered!","", "success")
          console.log('success');
          $location.path('/home');
        },
          function (response) {
            console.log('error');
            swal("Something went wrong.","Please Try again", "error")
          });
      }
    }
}]);
