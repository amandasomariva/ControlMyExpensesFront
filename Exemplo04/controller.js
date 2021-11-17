var listaController = angular.module('calculadoraControllerApp', []);
 
listaController.controller('CalculadoraControllerCtrl', ['$scope', function($scope) {
    var vm = this;

    vm.atualizar = function() {  
        if(vm.idade < 18){
            vm.resultado = "Olá "+ vm.nome + " "+ vm.sobrenome + ", você é menor de idade!"; 
        }else{
            vm.resultado = "Olá "+ vm.nome + " "+ vm.sobrenome + ", você é maior de idade!"; 
        }
      };
}]);