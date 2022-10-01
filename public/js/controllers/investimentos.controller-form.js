(function () {
    "use strict";

    angular
        .module("MyApp")
        .controller("InvestimentoFormController", InvestimentoFormController);

    InvestimentoFormController.$inject = [
        "InvestimentoService",
        "InvestidoService",
        "$location",
        "$routeParams",
        "$scope",
    ];

    function InvestimentoFormController(
        InvestimentoService,
        InvestidoService,
        $location,
        $routeParams,
        $scope
    ) {
        var vm = this;
        vm.cadastro = {};
        vm.titulo = "Novo Investimento";
        vm.item = null;
        vm.salvar = salvar;
        vm.select = select;
        vm.editarItem = editarItem;
        vm.salvarItem = salvarItem;
        vm.removerItem = removerItem;
        var itemSelecionado = -1;
        vm.adicionarItem = adicionarItem;

        activate();

        function activate() {
            if ($routeParams.id) {
                InvestimentoService.findById($routeParams.id).success(function (data) {
                    vm.cadastro = data;
                    vm.titulo = "Editando Investimento";
                });
            }
        }

        function salvar() {
            InvestimentoService.save(vm.cadastro).success(function () {
                $location.path("/investimento");
                //alert("Investimento cadastrado com sucesso!!");
            //}).error(function (erro) {
               // alert(JSON.stringify(erro));
            //});
        //}
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

    function select(valor){
        return '"'+valor+'"';
    }



        function adicionarItem() {
            vm.item = {}
            vm.modalTitulo = 'Novo Item'
            itemSelecionado = (vm.cadastro.investidos && vm.cadastro.investidos.length) || 0;
        }

        async function salvarItem() {
            await InvestidoService.findById(vm.item.investido.id).success(function(data) {
                vm.item = data;
                vm.cadastro.investidos = vm.cadastro.investidos || [];
                vm.cadastro.investidos[itemSelecionado] = vm.item;
                itemSelecionado = -1;
                vm.item = null;
               $scope.$apply();

            });
        }

        function editarItem(item) {
            itemSelecionado = vm.cadastro.investidos.indexOf(item);
            vm.modalTitulo = 'Editando Item'
            vm.item = angular.copy(item);
        }

        function removerItem(item) {
            let pos = vm.cadastro.investidos.indexOf(item);
            vm.cadastro.investidos.splice(pos, 1);
            $scope.$apply();
        }

    }
})();