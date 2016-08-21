/**
 * Created by wq on 2016/5/23.
 */
app.directive("productResource",function(){
    return{
        restrict:'E',
        replace:true,
        transclude:true,
        link:function($scope,$element,$attr){

        },
        // templateUrl:"view/tpl/product.resource.html"
    };
})