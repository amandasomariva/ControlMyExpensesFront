var listaController = angular.module('calculadoraControllerApp', []);
 
listaController.controller('CalculadoraControllerCtrl', ['$scope', function($scope) {
    var vm = this;

    vm.atualizar = function() {
        $scope.operacoes = [
            {nome: 'Soma', resultado: Number(vm.primeiroNumero) + Number(vm.segundoNumero)},
            {nome: 'Subtração', resultado: vm.primeiroNumero - vm.segundoNumero},
            {nome: 'Multiplicação', resultado: vm.primeiroNumero * vm.segundoNumero},
            {nome: 'Divisão', resultado: vm.primeiroNumero / vm.segundoNumero},
            {nome: 'Percentual', resultado: (Number(vm.primeiroNumero) + Number(vm.segundoNumero)) * 0.001 }
        ];
      };
}]);