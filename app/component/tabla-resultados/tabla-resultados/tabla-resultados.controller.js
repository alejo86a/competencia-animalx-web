function tablaResultadosController($stateParams) {
    var ctrl = this;

    console.log("tabla resultados")
    ctrl.$onInit = function() {
      //  ctrl.saludo = "hola mundo: " + $stateParams.nombretorneo;
        ctrl.arreglo = [{
            "baseActual": "5",
            "bases": [{
                    "base": "1",
                    "completada": "si",
                    "puntos": "20"
                },
                {
                    "base": "2",
                    "completada": "si",
                    "puntos": "30"
                },
                {
                    "base": "3",
                    "completada": "si",
                    "puntos": "40"
                },
                {
                    "base": "4",
                    "completada": "si",
                    "puntos": "50"
                },
                {
                    "base": "5",
                    "completada": "si",
                    "puntos": "50"
                },
                {
                    "base": "6",
                    "completada": "si",
                    "puntos": "40"
                }
            ],
            "participante": "Sergio Andres",
            "torneo": "torneosergi"
        }, {
            "baseActual": "5",
            "bases": [{
                    "base": "",
                    "completada": "si",
                    "puntos": "30"
                },
                {
                    "base": "2",
                    "completada": "si",
                    "puntos": "30"
                },
                {
                    "base": "3",
                    "completada": "si",
                    "puntos": "40"
                },
                {
                    "base": "4",
                    "completada": "si",
                    "puntos": "50"
                },
                {
                    "base": "5",
                    "completada": "si",
                    "puntos": "50"
                },
                {
                    "base": "6",
                    "completada": "si",
                    "puntos": "40"
                }
            ],
            "participante": "Jose Andres",
            "torneo": "torneosergi"
        }, {
            "baseActual": "5",
            "bases": [{
                    "base": "3",
                    "completada": "si",
                    "puntos": "40"
                },
                {
                    "base": "2",
                    "completada": "si",
                    "puntos": "30"
                },
                {
                    "base": "3",
                    "completada": "si",
                    "puntos": "40"
                },
                {
                    "base": "4",
                    "completada": "si",
                    "puntos": "50"
                },
                {
                    "base": "5",
                    "completada": "si",
                    "puntos": "50"
                },
                {
                    "base": "6",
                    "completada": "si",
                    "puntos": "40"
                }
            ],
            "participante": "Martin Elias",
            "torneo": "torneosergi"
        }, {
            "baseActual": "5",
            "bases": [{
                    "base": "4",
                    "completada": "si",
                    "puntos": "50"
                },
                {
                    "base": "2",
                    "completada": "si",
                    "puntos": "30"
                },
                {
                    "base": "3",
                    "completada": "si",
                    "puntos": "40"
                },
                {
                    "base": "4",
                    "completada": "si",
                    "puntos": "50"
                },
                {
                    "base": "5",
                    "completada": "si",
                    "puntos": "50"
                },
                {
                    "base": "6",
                    "completada": "si",
                    "puntos": "40"
                }
            ],
            "participante": "Alex Fernando",
            "torneo": "torneosergi"
        }, {
            "baseActual": "5",
            "bases": [{
                    "base": "5",
                    "completada": "si",
                    "puntos": "60"
                },
                {
                    "base": "2",
                    "completada": "si",
                    "puntos": "30"
                },
                {
                    "base": "3",
                    "completada": "si",
                    "puntos": "40"
                },
                {
                    "base": "4",
                    "completada": "si",
                    "puntos": "50"
                },
                {
                    "base": "5",
                    "completada": "si",
                    "puntos": "50"
                },
                {
                    "base": "6",
                    "completada": "si",
                    "puntos": "40"
                }
            ],
            "participante": "Jaime Isaza",
            "torneo": "torneosergi"
        }];
        ctrl.torneo = {
            "bases": [{
                    "juez": "",
                    "numeroBase": "1"
                },
                {
                    "juez": "",
                    "numeroBase": "2"
                },
                {
                    "juez": "",
                    "numeroBase": "3"
                },
                {
                    "juez": "",
                    "numeroBase": "4"
                },
                {
                    "juez": "",
                    "numeroBase": "5"
                },
                {
                    "juez": "",
                    "numeroBase": "6"
                }
            ],
            "juecesDisponibles": [{
                "nombreJuez": ""
            }],
            "nombreTorneo": "Torneo el mejor",
            "participantesDisponibles": [{
                "asignado": "",
                "nombre": ""
            }]
        };
        ctrl.total=function(fila){
          var total=0;
          for(var i=0;i<ctrl.arreglo[fila].bases.length;i++){
            total+=Number(ctrl.arreglo[fila].bases[i].puntos);
        }
          return total;
        }
    }
}

angular
    .module('component.tablaResultados')
    .controller('tablaResultadosController', tablaResultadosController);
