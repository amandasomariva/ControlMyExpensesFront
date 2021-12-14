(function() {
    "use strict";

    angular
        .module("MyApp")
        .controller("ResumoListController", ResumoListController);

    ResumoListController.$inject = ["ResumoService"];

    function ResumoListController(ResumoService) {
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
            ResumoService.find(query).then(function(result) {
                vm.itens = result.data;
                vm.total = 0.0;
                vm.itens.forEach(function(item){
                    vm.total += item.valor;
                  });
            });
        }

    
        function remover(item) {
            ResumoService.remove(item.id).success(function() {
                activate();
            });
        }
    }
})();