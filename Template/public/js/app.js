angular
    .module("MyApp", ["ngRoute", "satellizer"])
    .config(function($routeProvider, $locationProvider, $authProvider) {
        $locationProvider.html5Mode(true);

        $routeProvider
            .when("/", {
                templateUrl: "partials/login.html",
                controller:"LoginCtrl"
            })
            .when("/login", {
                templateUrl: "partials/login.html",
                controller:"LoginCtrl"
            })
            .when("/", {
                templateUrl: "partials/home.html",
            })
            .when("/home", {
                templateUrl: "partials/home.html",
            
            })
            .when("/investimento", {
                templateUrl: "partials/investimento.html",
            })
            .when("/investimento/:id", {
                templateUrl: "partials/investimento-form.html",
            })
            .when("/investimento/new", {
                templateUrl: "partials/investimento-form.html",
            })
            .when("/gasto", {
                templateUrl: "partials/gasto.html",
            })
            .when("/gasto/:id", {
                templateUrl: "partials/gasto-form.html",
            })
            .when("/gasto/new", {
                templateUrl: "partials/gasto-form.html",
            })
            .when("/renda", {
                templateUrl: "partials/renda.html",
            })
            .when("/renda/:id", {
                templateUrl: "partials/renda-form.html",
            })
            .when("/opcional", {
                templateUrl: "partials/opcional.html",
            })
            .when("/opcional/:id", {
                templateUrl: "partials/opcional-form.html",
            })
            .when("/opcional/new", {
                templateUrl: "partials/opcional-form.html",
            })
            .when("/renda/new", {
                templateUrl: "partials/renda-form.html",
            })
            .when("/usuario", {
                templateUrl: "partials/usuario.html",
            })
            .when("/usuario/:id", {
                templateUrl: "partials/usuario-form.html",
            })
            .when("/usuario/new", {
                templateUrl: "partials/usuario-form.html",
            })
            .when("/resumo", {
                templateUrl: "partials/resumo.html",
            })
            .when("/resumo/:id", {
                templateUrl: "partials/resumo-form.html",
            })
            .when("/resumo/new", {
                templateUrl: "partials/resumo-form.html",
            })
            .otherwise({
                templateUrl: "partials/404.html",
            });
    })
    .run(function($rootScope, $window) {
        
    })
    .directive("ngConfirmClick", [
        function() {
            return {
                link: function(scope, element, attr) {
                    var msg = attr.ngConfirmClick || "Are you sure?";
                    var clickAction = attr.confirmedClick;
                    element.bind("click", function(event) {
                        if (window.confirm(msg)) {
                            scope.$eval(clickAction);
                        }
                    });
                },
            };
        },
    ]);