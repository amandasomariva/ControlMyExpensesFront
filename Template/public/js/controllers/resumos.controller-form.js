(function () {
    "use strict";

    angular
        .module("MyApp")
        .controller("ResumoFormController", ResumoFormController);

    ResumoFormController.$inject = [
        "ResumoService",
        "$location",
        "$routeParams",
        "$scope",
    ];

    function ResumoFormController(
        ResumoService,
        $location,
        $routeParams
    ) {
        var vm = this;
        vm.cadastro = {};
        vm.titulo = "Novo Resumo";
        vm.item = null;
        vm.salvar = salvar;

        activate();

        function activate() {
            if ($routeParams.id) {
                ResumoService.findById($routeParams.id).success(function (data) {
                    vm.cadastro = data;
                    vm.titulo = "Editando o Resumo";
                });
            }
        }

        function salvar() {
            ResumoService.save(vm.cadastro).success(function () {
                $location.path("/resumo");
                alert("Resumo cadastrado com sucesso!!");
            }).error(function (erro) {
                alert(JSON.stringify(erro));
            });
        }

    function select(valor){
        return '"'+valor+'"';
    }

    }
})();