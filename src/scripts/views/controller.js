function guideCtrl($scope,$state){
 $scope.gohome=function(){
 	$state.go("home.index")
 }
}
angular.module("myapp")
        .controller("guideCtrl",guideCtrl)
        