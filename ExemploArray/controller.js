var listaController = angular.module('arrayControllerApp', []);
 
listaController.controller('arrayControllerCtrl', ['$scope', function($scope) {
    var vm = this;
    vm.editando = false;
    vm.total = 0;
    vm.index = -1;
    $scope.itens = [];

    vm.adicionar = function() {  
        let item = {
            descricao: vm.descricaoItem,
            quantidade: vm.quantidade,
            valorUnitario: vm.valorUnitario,
            valorTotal: vm.quantidade * vm.valorUnitario
        }

        if(vm.index === -1){
            $scope.itens.push(item);
            vm.descricaoItem = "";
            vm.quantidade = "";
            vm.valorUnitario = "";
        }else{
            $scope.itens[vm.index] = item;
            vm.descricaoItem = "";
            vm.quantidade = "";
            vm.valorUnitario = "";
        }
        vm.index = -1;
        vm.editando = false;

        vm.total = 0;
        for(var i = 0; i < $scope.itens.length; i++) {
            vm.total += $scope.itens[i].valorTotal;
        }
    };

    vm.editar = function(index, item) {  
        vm.descricaoItem = item.descricao;
        vm.quantidade = item.quantidade;
        vm.valorUnitario = item.valorUnitario;
        vm.index = index;
        vm.editando = true;
    }

    vm.excluir = function(index){
        $scope.itens.splice(index, 1);
    }

}]);