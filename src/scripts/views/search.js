function searchCtrl($scope,getData){
  getData.getJson($scope,"data/findlist.json");
    $("#cancel").click(function () {
        $(".s-div input").val("");
    })
    $(".s-list").on("click","button", function () {
        var flag = $(this).css("backgroundColor");
        if (flag == 'rgb(15, 196, 65)') {
            $(this).css({"background-color":"rgb(232, 232, 232)"}).html("已关注");
        }else{
            $(this).css({"background-color":"rgb(15, 196, 65)"}).html("关注");
        }
    })

}
angular.module("myapp")
        .controller("searchCtrl",searchCtrl);