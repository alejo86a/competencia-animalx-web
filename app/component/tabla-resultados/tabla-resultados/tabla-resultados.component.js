var tablaResultados = {
  bindings: {
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
          url:'/',
          component:'tablaResultados',
          resolve:{

          },
          params:{
            
          }
        })
    })
