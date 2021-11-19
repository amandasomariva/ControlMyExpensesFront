(function() {
    "use strict";

    angular
        .module("MyApp")
        .controller("RendaListController", RendaListController);

    RendaListController.$inject = ["RendaService"];

    function RendaListController(RendaService) {
        var vm = this;

        vm.item = null;
        vm.itens = [];
        vm.busca = "";
        vm.remover = remover;
        vm.buscar = activate;

        activate();

        function activate() {
            var query = vm.busca ? { $text: { $search: vm.busca } } : {};
            RendaService.find(query).then(function(result) {
                vm.itens = result.data;
            });
        }

        function remover(item) {
            RendaService.remove(item.id).success(function() {
                activate();
            });
        }
    }
})();