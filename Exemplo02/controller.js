var listaController = angular.module('listaControllerApp', []);
 
listaController.controller('ListaControllerCtrl', ['$scope', function($scope) {
 
    $scope.itens = [
        {nome: 'Jetta', marca: 'Volkswagen', comprado: false, cor: 'Vermelho'},
        {nome: 'City', marca: 'Honda', comprado: false, cor: 'Cinza'},
        {nome: 'Civic', marca: 'Honda', comprado: false, cor: 'Branco'}
    ];
 
}]);