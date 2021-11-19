(function () {
    "use strict";

    angular
        .module("MyApp")
        .controller("RendaFormController", RendaFormController);

    RendaFormController.$inject = [
        "RendaService",
        "$location",
        "$routeParams",
        "$scope",
    ];

    function RendaFormController(
        RendaService,
        $location,
        $routeParams
    ) {
        var vm = this;
        vm.cadastro = {};
        vm.titulo = "Nova Entrada";
        vm.item = null;
        vm.salvar = salvar;

        activate();

        function activate() {
            if ($routeParams.id) {
                RendaService.findById($routeParams.id).success(function (data) {
                    vm.cadastro = data;
                    vm.titulo = "Editando Entrada";
                });
            }
        }

        function salvar() {
            RendaService.save(vm.cadastro).success(function () {
                $location.path("/renda");
                alert("Entrada cadastrada com sucesso!!");
            }).error(function (erro) {
                alert(JSON.stringify(erro));
            });
        }

    

    }
})();