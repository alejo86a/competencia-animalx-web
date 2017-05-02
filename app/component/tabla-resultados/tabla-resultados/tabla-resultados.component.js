var tablaResultados = {
  bindings: {
    variable:'<'
  },
  templateUrl:'app/component/tabla-resultados/tabla-resultados/tabla-resultados.html',
  controller:'tablaResultadosController'
};

angular
  .module('component.tablaResultados')
    .component('tablaResultados',tablaResultados)
    .config(function($stateProvider){
      $stateProvider
        .state('tablaResultados',{
          url:'/torneo/:nombretorneo',
          component:'tablaResultados',
          resolve:{

          },
          params:{

          }
        })
    })
