'use strict';

/**
 * @ngdoc directive
 * @name financieraClienteApp.directive:rubros/rubrosPorRpSeleccionMultiple
 * @description
 * # rubros/rubrosPorRpSeleccionMultiple
 */
angular.module('financieraClienteApp')
  .directive('rubrosPorRpSeleccionMultiple', function (financieraRequest, $timeout) {
    return {
      restrict: 'E',
      scope:{
        rpid:'=?',
        rubros:'=?'
        },

      templateUrl: '/views/directives/rubros/rubros_por_rp_seleccion_multiple.html',
      controller:function($scope){
        var self = this;
        self.gridOptions_rubros = {
          enableRowSelection: true,
          enableRowHeaderSelection: true,
          columnDefs : [
            {field: 'DisponibilidadApropiacion.Apropiacion.Rubro.Id',                visible : false},
            {field: 'DisponibilidadApropiacion.Apropiacion.Rubro.Codigo',            displayName: 'Codigo'},
            {field: 'DisponibilidadApropiacion.Apropiacion.Rubro.Vigencia',          displayName: 'Vigencia'},
            {field: 'DisponibilidadApropiacion.Apropiacion.Rubro.Descripcion',       displayName: 'Descripción'}
          ]
        };
        // refrescar
        self.refresh = function() {
          $scope.refresh = true;
          $timeout(function() {
            $scope.refresh = false;
          }, 0);
        };
        //
        $scope.$watch('rpid', function(){
          self.refresh();
          if ($scope.rpid){
            financieraRequest.get('registro_presupuestal_disponibilidad_apropiacion',
            $.param({
              query: "RegistroPresupuestal.Id:" + $scope.rpid,
              limit:0
            })
            ).then(function(response) {
              self.gridOptions_rubros.data = response.data;
            });
          }
        })

        self.gridOptions_rubros.onRegisterApi = function(gridApi){
            //set gridApi on scope
            self.gridApi = gridApi;
            gridApi.selection.on.rowSelectionChanged($scope,function(row){
              $scope.rubros = row.entity.DisponibilidadApropiacion.Apropiacion.Rubro.isSelected
            });
            //
            gridApi.selection.on.rowSelectionChangedBatch($scope,function(rows){
              $scope.rubros = row.entity.DisponibilidadApropiacion.Apropiacion.Rubro.length
            });


          };
          self.gridOptions_rubros.multiSelect = true;

        //
      },
      controllerAs:'d_rubrosPorRpSeleccionMultiple'
    };
  });