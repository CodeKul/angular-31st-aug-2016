angular.module('MyApp',[])
.controller('MyController',[function MyController(){
  this.click = function(){
    this.number += 2;
  };
}]);
