function tablaResultadosController(){
  var ctrl = this;

    console.log("tabla resultados")
  ctrl.$onInit = function(){
    ctrl.saludo="hola mundo";
  }
}

angular
  .module('component.tablaResultados')
  .controller('tablaResultadosController',tablaResultadosController)
