(function() {
    "use strict";

    angular.module("MyApp").controller("HomeController", HomeController);

    HomeController.$inject = ["$rootScope", "$location", "$window"];

    function HomeController($rootScope, $location, $window) {
        var vm = this;
        var itemSelecionado = -1;

        vm.cidadesPage = cidadesPage;
        vm.estadosPage = estadosPage;
        vm.investimentosPage = investimentosPage;
        vm.rendasPage = rendasPage;
        vm.resumosPage = resumosPage;
        vm.gastosPage = gastosPage;
        vm.usuariosPage = usuariosPage;
        

        activate();

        function activate() {
        }

        function cidadesPage() {
            $location.path("/cidade");
        }

        function estadosPage() {
            $location.path("/estado");
        }

        function investimentosPage() {
            $location.path("/investimento");
        }

        function gastosPage() {
            $location.path("/gasto");
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