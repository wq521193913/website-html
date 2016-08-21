/**
 * Created by wq on 2016/5/9.
 */
app.controller("frontProduct",["$scope","$compile","$timeout",function($scope, $compile, $timeout){
    var dataSource = {
        productList:[
            {"id":"1","url":"resource/11.jpg","name":"港荣蒸蛋糕1"},
            {"id":"2","url":"resource/11.jpg","name":"港荣蒸蛋糕2"},
            {"id":"3","url":"resource/11.jpg","name":"港荣蒸蛋糕3"},
            {"id":"4","url":"resource/11.jpg","name":"港荣蒸蛋糕4"},
            {"id":"5","url":"resource/11.jpg","name":"港荣蒸蛋糕5"},
            {"id":"6","url":"resource/11.jpg","name":"港荣蒸蛋糕6"},
            {"id":"7","url":"resource/11.jpg","name":"港荣蒸蛋糕7"},
            {"id":"8","url":"resource/11.jpg","name":"港荣蒸蛋糕8"},
        ]
    }
    var template = Handlebars.templates["product.resource"];
    var dom1 = template(dataSource);
    $("#productTable").append(dom1);
}]);