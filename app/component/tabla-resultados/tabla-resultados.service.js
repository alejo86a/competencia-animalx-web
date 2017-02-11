function TablaResultadosService($http,$q){
  return{
    getTabla : function(){
      $http.get('url/blablablabla')
      .success(function(data){
        defered.resolve(data);
      })
      .error(function(err){
        defered.reject(err);
      })
    }
  }
}

angular
  .module('component.tablaResultados')
  .service('TablaResultadosService',TablaResultadosService);
