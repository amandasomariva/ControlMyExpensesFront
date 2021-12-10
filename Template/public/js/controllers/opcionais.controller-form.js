(function () {
    "use strict";

    angular
        .module("MyApp")
        .controller("OpcionalFormController", OpcionalFormController);

        OpcionalFormController.$inject = [
        "OpcionalService",
        "$location",
        "$routeParams",
        "$scope",
    ];

    function OpcionalFormController(
        OpcionalService,
        $location,
        $routeParams
    ) {
        var vm = this;
        vm.cadastro = {};
        vm.titulo = "Novo Opcional";
        vm.item = null;
        vm.salvar = salvar;

        activate();

        function activate() {
            if ($routeParams.id) {
                OpcionalService.findById($routeParams.id).success(function (data) {
                    vm.cadastro = data;
                    vm.titulo = "Editando Opcional";
                });
            }
        }

        function salvar() {
            OpcionalService.save(vm.cadastro).success(function () {
                $location.path("/opcional");
                alert("Opcional cadastrado com sucesso!!");
            }).error(function (erro) {
                alert(JSON.stringify(erro));
            });
        }

    

    }
})();