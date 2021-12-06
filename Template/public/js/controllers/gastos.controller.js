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

        activate();

        function activate() {
            var query = vm.busca ? { $text: { $search: vm.busca } } : {};
            GastoService.find(query).then(function(result) {
                vm.itens = result.data;
            });
        }

        function remover(item) {
            GastoService.remove(item.id).success(function() {
                activate();
            });
        }
    }
})();