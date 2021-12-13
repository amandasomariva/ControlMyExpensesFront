(function () {
    "use strict";

    angular
        .module("MyApp")
        .controller("InvestimentoFormController", InvestimentoFormController);

    InvestimentoFormController.$inject = [
        "InvestimentoService",
        "InvestidoService",
        "$location",
        "$routeParams",
        "$scope",
    ];

    function InvestimentoFormController(
        InvestimentoService,
        InvestidoService,
        $location,
        $routeParams
    ) {
        var vm = this;
        vm.cadastro = {};
        vm.titulo = "Novo Investimento";
        vm.item = null;
        vm.salvar = salvar;
        vm.select = select;

        activate();

        function activate() {
            if ($routeParams.id) {
                InvestimentoService.findById($routeParams.id).success(function (data) {
                    vm.cadastro = data;
                    vm.titulo = "Editando Investimento";
                });
            }
        }

        function salvar() {
            InvestimentoService.save(vm.cadastro).success(function () {
                $location.path("/investimento");
                alert("Investimento cadastrado com sucesso!!");
            }).error(function (erro) {
                alert(JSON.stringify(erro));
            });
        }

    function select(valor){
        return '"'+valor+'"';
    }



        function adicionarItem() {
            vm.item = {}
            vm.modalTitulo = 'Novo Item'
            itemSelecionado = (vm.cadastro.opcionais && vm.cadastro.opcionais.length) || 0;
        }

        function salvarItem() {
            OpcionalService.findById(vm.item.opcional.id).success(function(data) {
                vm.item = data;
                vm.cadastro.opcionais = vm.cadastro.opcionais || [];
                vm.cadastro.opcionais[itemSelecionado] = vm.item;
                itemSelecionado = -1;
                vm.item = null;
                $scope.$apply();
            });
        }

        function editarItem(item) {
            itemSelecionado = vm.cadastro.opcionais.indexOf(item);
            vm.modalTitulo = 'Editando Item'
            vm.item = angular.copy(item);
        }

        function removerItem(item) {
            let pos = vm.cadastro.opcionais.indexOf(item);
            vm.cadastro.opcionais.splice(pos, 1);
            $scope.$apply();
        }

    }
})();