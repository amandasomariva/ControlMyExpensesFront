(function () {
    "use strict";

    angular
        .module("MyApp")
        .controller("GastoFormController", GastoFormController);

    GastoFormController.$inject = [
        "GastoService",
        "$location",
        "$routeParams",
        "$scope",
    ];

    function GastoFormController(
        GastoService,
        $location,
        $routeParams
    ) {
        var vm = this;
        vm.cadastro = {};
        vm.titulo = "Nova despesa";
        vm.item = null;
        vm.salvar = salvar;

        activate();

        function activate() {
            if ($routeParams.id) {
                GastoService.findById($routeParams.id).success(function (data) {
                    vm.cadastro = data;
                    vm.titulo = "Editando Despesa";
                });
            }
        }

        function salvar() {
            EstadoService.save(vm.cadastro).success(function () {
                $location.path("/gasto");
                alert("Despesa cadastrada com sucesso!!");
            }).error(function (erro) {
                alert(JSON.stringify(erro));
            });
        }

    

    }
})();