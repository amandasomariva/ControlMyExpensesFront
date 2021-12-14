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
        vm.total = 0.0;


        activate();

        function activate() {
            var query = vm.busca ? { $text: { $search: vm.busca } } : {};
            RendaService.find(query).then(function(result) {
                vm.itens = result.data;
                vm.total = 0.0;
                vm.itens.forEach(function(item){
                    vm.total += item.valor;
                  });
            });
        }

    
        function remover(item) {
            RendaService.remove(item.id).success(function() {
                activate();
            });
        }
    }
})();