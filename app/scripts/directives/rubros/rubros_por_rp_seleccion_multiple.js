'use strict';

/**
 * @ngdoc directive
 * @name financieraClienteApp.directive:rubros/rubrosPorRpSeleccionMultiple
 * @description
 * # rubros/rubrosPorRpSeleccionMultiple
 */
angular.module('financieraClienteApp')
  .directive('rubrosPorRpSeleccionMultiple', function(financieraRequest, $timeout, $translate) {
    return {
      restrict: 'E',
      scope: {
        rpid: '=?',
        rubrosobj: '=?',
        inputpestanaabierta: '=?'
      },

      templateUrl: 'views/directives/rubros/rubros_por_rp_seleccion_multiple.html',
      controller: function($scope) {
        var self = this;
        self.gridOptions_rubros = {
          enableRowSelection: true,
          enableRowHeaderSelection: true,
          enableSelectAll: true,
          columnDefs: [{
              field: 'DisponibilidadApropiacion.Apropiacion.Rubro.Id',
              visible: false
            },
            {
              field: 'DisponibilidadApropiacion.Apropiacion.Rubro.Codigo',
              displayName: $translate.instant('CODIGO'),
              cellClass: 'input_center'
            },
            {
              field: 'DisponibilidadApropiacion.Apropiacion.Rubro.Vigencia',
              displayName: $translate.instant('VIGENCIA'),
              width: '5%',
              cellClass: 'input_center'
            },
            {
              field: 'DisponibilidadApropiacion.Apropiacion.Rubro.Descripcion',
              displayName: $translate.instant('DESCRIPCION')
            },
            {
              field: 'Valor',
              displayName: $translate.instant('VALOR'),
              cellFilter: 'currency',
              width: '14%',
              cellClass: 'input_right'
            },
            {
              field: 'Saldo',
              displayName: $translate.instant('SALDO'),
              cellFilter: 'currency',
              width: '14%',
              cellClass: 'input_right'
            }, //obtenido por servicio financieraRequest.post('registro_presupuestal/SaldoRp',rpData)
            {
              field: 'DisponibilidadApropiacion.FuenteFinanciamiento.Descripcion',
              displayName: $translate.instant('FUENTES_FINANCIACION')
            },
            {
              field: 'DisponibilidadApropiacion.FuenteFinanciamiento.Codigo',
              displayName: $translate.instant('FUENTE_FINANCIACION_CODIGO'),
              width: '7%',
              cellClass: 'input_center'
            },
          ]
        };
        self.gridOptions_rubros.multiSelect = true;
        //
        self.gridOptions_rubros.onRegisterApi = function(gridApi) {
          //set gridApi on scope
          self.gridApi = gridApi;
          gridApi.selection.on.rowSelectionChanged($scope, function(row) {
            $scope.rubrosobj = self.gridApi.selection.getSelectedRows();
          });
        };
        // refrescar
        self.refresh = function() {
          $scope.refresh = true;
          $timeout(function() {
            $scope.refresh = false;
          }, 0);
        };
        //
        $scope.$watch('inputpestanaabierta', function() {
          if ($scope.inputpestanaabierta){
            $scope.a = true;
          }
        })
        //
        $scope.$watch('rpid', function() {
          //self.refresh();
          if ($scope.rpid != undefined) {
            financieraRequest.get('registro_presupuestal_disponibilidad_apropiacion',
              $.param({
                query: "RegistroPresupuestal.Id:" + $scope.rpid,
                limit: 0
              })
            ).then(function(response) {
              self.gridOptions_rubros.data = response.data;
              $scope.gridHeight = self.gridOptions_rubros.rowHeight * 2 + (self.gridOptions_rubros.data.length * self.gridOptions_rubros.rowHeight);
              // get saldos de lor rp
              angular.forEach(self.gridOptions_rubros.data, function(data) {
                var rpData = {
                  Rp: data.RegistroPresupuestal,
                  Apropiacion: data.DisponibilidadApropiacion.Apropiacion,
                  FuenteFinanciacion: data.DisponibilidadApropiacion.FuenteFinanciamiento
                };
                financieraRequest.post('registro_presupuestal/SaldoRp', rpData).then(function(response) {
                  data.Saldo = response.data.saldo;
                });
              });
              //fin get saldos de lor rp
            });
          }
        })
        // fin
      },
      controllerAs: 'd_rubrosPorRpSeleccionMultiple'
    };
  });
