angular.module('userProfiles')
.service('friendService', function( $http ) {


    this.login = function( user ) {
      return $http({
        method: 'POST',
        url: 'http://localhost:1138/api/login',
        data: {
          user: user
        }
      })
    };

    this.getInfo = function() {
      return $http({
        method: 'GET',
        url: 'http://localhost:1138/api/profiles'
      })
    };

});
