var listaController = angular.module('arrayControllerApp', []);

listaController.controller('arrayControllerCtrl', ['$scope', function($scope) {
    var vm = this;

    vm.editando = false;
    vm.presentes = 0;
    vm.faltantes = 0;

    vm.index = -1;
    $scope.alunos = [];

    var resetaAluno = function() {
        vm.nome = "";
        vm.endereco = "";
        vm.telefone = "";
        vm.cpf = "";
        vm.compareceu = "";
    }

    var calculaPresentesFaltantes = function() {
        vm.presentes = 0;
        vm.faltantes = 0;

        for(var i = 0; i < $scope.alunos.length; i++) {
            if($scope.alunos[i].compareceu) {
                vm.presentes++;
            } else {
                vm.faltantes++;
            };
        }
    }

    vm.adicionar = function() {
        let aluno = {
            nome: vm.nome,
            endereco: vm.endereco,
            telefone: vm.telefone,
            cpf: vm.cpf,
            compareceu: vm.compareceu
        }

        if(vm.index === -1){
            $scope.alunos.push(aluno);
            vm.nome = "";
            vm.endereco = "";
            vm.telefone = "";
            vm.cpf = "";
            vm.compareceu = "";
        }else{
            $scope.alunos[vm.index] = aluno;
            resetaAluno();
        }

        vm.index = -1;
        vm.editando = false;

        calculaPresentesFaltantes();
    };

    vm.editar = function(index, aluno) {
        vm.nome = aluno.nome;
        vm.endereco = aluno.endereco;
        vm.telefone = aluno.telefone;
        vm.cpf = aluno.cpf;
        vm.compareceu = aluno.compareceu;

        vm.index = index;
        vm.editando = true;
    }

    vm.excluir = function(index){
        $scope.alunos.splice(index, 1);

        calculaPresentesFaltantes();
    }

}]);