(function () {
    "use strict";

    angular
        .module("MyApp")
        .controller("RendaFormController", RendaFormController);

    RendaFormController.$inject = [
        "RendaService",
        "$location",
        "$routeParams",
        "$scope",
    ];

    function RendaFormController(
        RendaService,
        $location,
        $routeParams
    ) {
        var vm = this;
        vm.cadastro = {};
        vm.titulo = "Nova Entrada";
        vm.item = null;
        vm.salvar = salvar;

        activate();

        function activate() {
            if ($routeParams.id) {
                RendaService.findById($routeParams.id).success(function (data) {
                    vm.cadastro = data;
                    vm.titulo = "Editando Entrada";
                });
            }
        }

        function salvar() {
            RendaService.save(vm.cadastro).success(function () {
                $location.path("/renda");
                //alert("Despesa cadastrada com sucesso!!");
            message('sucesso','Renda cadastrada com sucesso!!');
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