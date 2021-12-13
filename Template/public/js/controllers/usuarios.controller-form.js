(function () {
    "use strict";

    angular
        .module("MyApp")
        .controller("UsuarioFormController", UsuarioFormController);

    UsuarioFormController.$inject = [
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
        vm.titulo = "Novo Usuário";
        vm.item = null;
        vm.salvar = salvar;
        vm.select = select;

        activate();

        function activate() {
            if ($routeParams.id) {
                UsuarioService.findById($routeParams.id).success(function (data) {
                    vm.cadastro = data;
                    vm.titulo = "Editando Usuário";
                });
            }
        }

        function salvar() {
            UsuarioService.save(vm.cadastro).success(function () {
                $location.path("/usuario");
                //alert("Despesa cadastrada com sucesso!!");
            message('sucesso','Usuário cadastrado com sucesso!!');
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
