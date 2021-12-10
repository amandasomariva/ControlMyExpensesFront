(function() {
    "use strict";

    angular
        .module("MyApp")
        .controller("OpcionalListController", OpcionalListController);

        OpcionalListController.$inject = ["OpcionalService"];

    function OpcionalListController(OpcionalService) {
        var vm = this;

        vm.item = null;
        vm.itens = [];
        vm.busca = "";
        vm.remover = remover;
        vm.buscar = activate;

        activate();

        function activate() {
            var query = vm.busca ? { $text: { $search: vm.busca } } : {};
            OpcionalService.find(query).then(function(result) {
                vm.itens = result.data;
            });
        }

        function remover(item) {
            OpcionalService.remove(item.id).success(function() {
                activate();
            });
        }
    }
})();