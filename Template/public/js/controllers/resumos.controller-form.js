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
                //alert("Despesa cadastrada com sucesso!!");
            message('sucesso','Resumo cadastrado com sucesso!!');
            }).error(function (erro) {
                //alert(JSON.stringify(erro));
                let msg = erro;
                if(msg.erro){
                    message('erro',msg.erro);
                }else{
                    message('erro',JSON.stringify(erro));
                }
                
        });
        }
    

    function message(tipo, mensagem) {
        let text = "";
        if (tipo === 'info') {
            tipo = 'alert alert-info';
            text = 'Informação!';
        }
        if (tipo === 'sucesso') {
            tipo = 'alert alert-success';
            text = 'Sucesso!';
        }
        if (tipo === 'erro') {
            tipo = 'alert alert-danger';
            text = 'Erro!';
        }
        let message = '<div id="alerta" class="' + tipo + '" id="bsalert">';
        message += '    <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a> ';
        message += '    <strong>' + text + '</strong> ' + mensagem + '  ';
        message += ' </div> ';
        $("#divPrincipal").append(message);

        setTimeout(function(){ 
            $("#alerta").alert('close');
         }, 3000);
    }

    

    }
})();