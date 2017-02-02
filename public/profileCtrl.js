angular.module('userProfiles')
.controller('profileCtrl', function( $scope, friendService ) {
	// FIX ME - assign values to $scope.currentUser and $scope.friends

  $scope.getInfo = function(){
    friendService.getInfo().then(function(response){

      $scope.currentUser= response.data.currentUser
      $scope.friends = response.data.friends
      console.log($scope.currentUser)
    }

  )
}
  $scope.getInfo()
});
