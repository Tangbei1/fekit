function indexCtrl($scope,getData){
    getData.getJson($scope,"data/livelist.json");
    setTimeout(function(){
    var mySwiper = new Swiper(".swiper-container",{
                direction:"horizontal",
                loop:false
            })
    var sum;
    $("#nav li").click(function () {
        var ind = $(this).index();
        $(this).addClass("border").siblings().removeClass();
        mySwiper[1].slideTo(ind, 1000, false);
    })
    $("#title li").click(function () {
        var ind = $(this).index();
        $(this).addClass("active").siblings().removeClass()
        mySwiper[0].slideTo(ind, 1000, false);
    })
    new IScroll("#scroll")
},200)
}
angular.module("myapp")
        .controller("indexCtrl",indexCtrl);