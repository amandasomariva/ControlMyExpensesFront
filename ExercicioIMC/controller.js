var listaController = angular.module('calculadoraControllerApp', []);
 
listaController.controller('CalculadoraControllerCtrl', ['$scope', function($scope) {
    var vm = this;

    vm.atualizar = function() {  

        let imc = vm.peso /(vm.altura * vm.altura);
        vm.classificacao = 0;

        if(imc < 18.5){
            vm.resultado = "Abaixo do Peso"; 
            vm.classificacao = 3;
        }else if(imc <= 24.9){
            vm.resultado = "Peso Normal"; 
            vm.classificacao = 1;
        }else if(imc <= 29.9){
            vm.resultado = "Excesso de Peso"; 
            vm.classificacao = 3;
        }else if(imc <= 34.9){
            vm.resultado = "Obesidade classe I"; 
            vm.classificacao = 4;
        }else if(imc <= 39.9){
            vm.resultado = "Obesidade classe II";
            vm.classificacao = 4;
        }else{
            vm.resultado = "Obesidade classe III";
            vm.classificacao = 4;
        }
        vm.resultado = "Olá, "+vm.nome +" você esta com "+vm.resultado
        vm.resultado += " (IMC: "+imc+")."
      };
}]);