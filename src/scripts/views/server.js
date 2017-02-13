
    angular.module("myapp")
        .service("getData", function ($http) {
            this.getJson = function (scope,url) {
                $http.get(url).then(function (response) {
                    scope.data = response.data.data;
                })
            };
            this.getFind = function (url,callback) {
                $http.get(url).then(function (response) {
                    callback(response.data.data)
                })
            };
        })


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  