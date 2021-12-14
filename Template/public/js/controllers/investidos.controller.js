(function() {
    "use strict";

    angular
        .module("MyApp")
        .controller("InvestidoListController", InvestidoListController);

        InvestidoListController.$inject = ["InvestidoService"];

    function InvestidoListController(InvestidoService) {
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
            InvestidoService.find(query).then(function(result) {
                vm.itens = result.data;
            });
        }

        function remover(item) {
            InvestidoService.remove(item.id).success(function() {
                activate();
            });
        }
    }
})();