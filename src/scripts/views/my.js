function myCtrl($scope) {
    var mySwiper = new Swiper(".mine-swiper", {
            onSlideChangeStart: function (swiper) {
                var index = swiper.activeIndex;
                $("#nav").find("li").eq(index).addClass("active").siblings().removeClass("active");
            }
        })
}
angular.module("myapp")
        .controller("myCtrl",myCtrl);