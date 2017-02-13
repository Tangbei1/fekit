function guideCtrl($scope,$state){
 new Swiper('.swiper-container',{})
 console.log('test');
 $scope.gohome=function(){
    $state.go("home.index")
 }
}
angular.module("myapp")
        .controller("guideCtrl",guideCtrl);