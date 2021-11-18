(function () {
    "use strict";

    angular
        .module("MyApp")
        .controller("UsuarioFormController", UsuarioFormController);

    InvestimentoFormController.$inject = [
        "UsuarioService",
        "$location",
        "$routeParams",
        "$scope",
    ];

    function UsuarioFormController(
        UsuarioService,
        $location,
        $routeParams
    ) {
        var vm = this;
        vm.cadastro = {};
        vm.titulo = "Novo Usuario";
        vm.item = null;
        vm.salvar = salvar;
        vm.select = select;

        activate();

        function activate() {
            if ($routeParams.id) {
                InvestimentoService.findById($routeParams.id).success(function (data) {
                    vm.cadastro = data;
                    vm.titulo = "Editando Usuario";
                });
            }
        }

        function salvar() {
            InvestimentoService.save(vm.cadastro).success(function () {
                $location.path("/Usuario");
                alert("Usuario cadastrado com sucesso!!");
            }).error(function (erro) {
                alert(JSON.stringify(erro));
            });
        }

    function select(valor){
        return '"'+valor+'"';
    }

    }
})();