(function() {
    "use strict";

    angular.module("MyApp").controller("HomeController", HomeController);

    HomeController.$inject = ["$rootScope", "$location", "$window","GastoService","InvestimentoService","RendaService","ResumoService"];

    function HomeController($rootScope, $location, $window, GastoService, InvestimentoService, RendaService, ResumoService) {
        var vm = this;
        var itemSelecionado = -1;

        vm.investimentosPage = investimentosPage;
        vm.rendasPage = rendasPage;
        vm.resumosPage = resumosPage;
        vm.investidosPage = investidosPage;
        vm.gastosPage = gastosPage;
        vm.usuariosPage = usuariosPage;
        vm.isAdministrador = isAdministrador;
        vm.valorTotal = 0;
        vm.saldo = 0;
        vm.valorGasto = 0;

        activate();

        function activate() {
            GastoService.find().then(function(result) {
                vm.valor = result.data;
                vm.valorTotal = vm.valor.length;
            });
            RendaService.find().then(function(result) {
                vm.saldo = result.data;
                vm.saldo = vm.saldo.length;
                vm.valorGasto = vm.saldo - vm.valorGasto;
            });
        }

        function isAdministrador (){
            return $window.localStorage.administrador;
        };

        function investimentosPage() {
            $location.path("/investimento");
        }

        function gastosPage() {
            $location.path("/gasto");

        }

        function investidosPage() {
            $location.path("/investido");
        }

        function rendasPage() {
            $location.path("/renda");
        }

        function resumosPage() {
            $location.path("/resumo");
        }

        function usuariosPage() {
            $location.path("/usuario");
        }
    }
})();