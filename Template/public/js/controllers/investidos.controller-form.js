(function () {
    "use strict";

    angular
        .module("MyApp")
        .controller("InvestidoFormController", InvestidoFormController);

        InvestidoFormController.$inject = [
        "InvestidoService",
        "$location",
        "$routeParams",
        "$scope",
    ];

    function InvestidoFormController(
        InvestidoService,
        $location,
        $routeParams
    ) {
        var vm = this;
        vm.cadastro = {};
        vm.titulo = "Novo Lançamento";
        vm.item = null;
        vm.salvar = salvar;

        activate();

        function activate() {
            if ($routeParams.id) {
                InvestidoService.findById($routeParams.id).success(function (data) {
                    vm.cadastro = data;
                    vm.titulo = "Editando lançamento";
                });
            }
        }

        function salvar() {
            InvestidoService.save(vm.cadastro).success(function () {
                $location.path("/investido");
                alert("Lançamento cadastrado com sucesso!!");
            }).error(function (erro) {
                alert(JSON.stringify(erro));
            });
        }

    

    }
})();