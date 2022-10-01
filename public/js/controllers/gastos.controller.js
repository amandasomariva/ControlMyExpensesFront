(function() {
    "use strict";

    angular
        .module("MyApp")
        .controller("GastoListController", GastoListController);

    GastoListController.$inject = ["GastoService"];

    function GastoListController(GastoService) {
        var vm = this;

        vm.item = null;
        vm.itens = [];
        vm.busca = "";
        vm.remover = remover;
        vm.buscar = activate;
        vm.total = 0.0;


        activate();

        function activate() {
            var query = vm.busca ? { $text: { $search: vm.busca } } : {};
            GastoService.find(query).then(function(result) {
                vm.itens = result.data;
                vm.total = 0.0;
                vm.itens.forEach(function(item){
                    vm.total += item.valorCompra;
                  });
            });
        }

    
        function remover(item) {
            GastoService.remove(item.id).success(function() {
                activate();
            });
        }
    }
})();