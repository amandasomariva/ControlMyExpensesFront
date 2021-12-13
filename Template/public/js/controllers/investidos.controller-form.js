(function () {
    "use strict";

    angular
        .module("MyApp")
        .controller("InvestidoFormController", InvestidoFormController);

        InvestidoFormController.$inject = [
        "InvestidoService",
        "$location",
        "$routeParams",
        "$scope",
    ];

    function InvestidoFormController(
        InvestidoService,
        $location,
        $routeParams
    ) {
        var vm = this;
        vm.cadastro = {};
        vm.titulo = "Novo Lançamento";
        vm.item = null;
        vm.salvar = salvar;

        activate();

        function activate() {
            if ($routeParams.id) {
                InvestidoService.findById($routeParams.id).success(function (data) {
                    vm.cadastro = data;
                    vm.titulo = "Editando lançamento";
                });
            }
        }

        function salvar() {
            InvestidoService.save(vm.cadastro).success(function () {
                $location.path("/investido");
               //alert("Despesa cadastrada com sucesso!!");
            message('sucesso','Lançamento cadastrado com sucesso!!');
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