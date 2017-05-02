function tablaResultadosController($stateParams){
  var ctrl = this;

    console.log("tabla resultados")
  ctrl.$onInit = function(){
    ctrl.saludo="hola mundo: "+$stateParams.nombretorneo;

  }
}

angular
  .module('component.tablaResultados')
  .controller('tablaResultadosController',tablaResultadosController)
