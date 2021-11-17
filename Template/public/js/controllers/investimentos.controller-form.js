(function () {
    "use strict";

    angular
        .module("MyApp")
        .controller("InvestimentoFormController", InvestimentoFormController);

    InvestimentoFormController.$inject = [
        "InvestimentoService",
        "$location",
        "$routeParams",
        "$scope",
    ];

    function InvestimentoFormController(
        InvestimentoService,
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

    }
})();