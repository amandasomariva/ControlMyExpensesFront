(function() {
    "use strict";

    angular.module("MyApp").controller("HomeController", HomeController);

    HomeController.$inject = ["$rootScope", "$location", "$window"];

    function HomeController($rootScope, $location, $window) {
        var vm = this;
        var itemSelecionado = -1;

        
        
        vm.investimentosPage = investimentosPage;
        vm.rendasPage = rendasPage;
        vm.resumosPage = resumosPage;
        vm.gastosPage = gastosPage;
        vm.usuariosPage = usuariosPage;
        vm.isAdministrador = isAdministrador;
        

        activate();

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