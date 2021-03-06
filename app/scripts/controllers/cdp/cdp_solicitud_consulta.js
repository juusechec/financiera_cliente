'use strict';

/**
 * @ngdoc function
 * @name financieraClienteApp.controller:CdpCdpSolicitudConsultaCtrl
 * @description
 * # CdpCdpSolicitudConsultaCtrl
 * Controller of the financieraClienteApp
 */
angular.module('financieraClienteApp')
.factory("solicitud_disponibilidad",function(){
        return {};
  })
  .controller('CdpCdpSolicitudConsultaCtrl', function ($scope,argoRequest,solicitud_disponibilidad,financieraRequest,financieraMidRequest, $window, uiGridConstants,uiGridService) {
    var self = this;
    self.alerta = "";
    self.message = 'Solicitudes de Disponibilidad Presupuestal';

    self.gridOptions = {
      enableRowSelection: true,
      enableRowHeaderSelection: false,
      enableFiltering : true,
      columnDefs : [
        {field: 'SolicitudDisponibilidad.Id',             visible : false},
        {field: 'SolicitudDisponibilidad.Numero',  displayName: 'No. ', cellClass: 'input_center',},
        {field: 'DependenciaSolicitante.Nombre',  displayName: 'Dependencia Solicitante'},
        {field: 'DependenciaDestino.Nombre',  displayName: 'Dependencia Destino'},
        {field: 'SolicitudDisponibilidad.Vigencia',  displayName: 'Vigencia', cellClass: 'input_center',},
        {field: 'SolicitudDisponibilidad.FechaSolicitud',  displayName: 'Fecha de Solicitud' , cellClass: 'input_center', cellTemplate: '<span>{{row.entity.SolicitudDisponibilidad.FechaSolicitud | date:"yyyy-MM-dd":"+0900"}}</span>'}
      ],
      onRegisterApi : function( gridApi ) {
        self.gridApi = gridApi;
      }

    };
    //cargar datos de las Solicitudes
    financieraMidRequest.get('disponibilidad/Solicitudes','limit=0&query=Expedida:false&sortby=Id&order=desc').then(function(response) {
      self.gridOptions.data.length = 0;
      self.gridOptions.data = response.data;


    });
    //-------------------------------
    self.limpiar_alertas= function(){
      self.alerta_registro_cdp = "";
    };

    //funcion para actualizar grid
    self.actualiza_solicitudes = function () {
      financieraMidRequest.get('disponibilidad/Solicitudes','limit=0&query=Expedida:false&sortby=Id&order=desc').then(function(response) {
        self.gridOptions.data.length = 0;
        self.gridOptions.data = response.data;


      });
      };
    //----------------------------

    //generar la disponibilidad (peticion al mid api)
    self.generar_disponibilidad = function(){
        var solicitudes_a_generar = self.gridApi.selection.getSelectedRows();
        var solicitud = angular.copy(solicitudes_a_generar);
        for (var i=0; i < solicitud.length; i++){
          delete solicitud[i]["$$treeLevel"];
          console.log(solicitud[i]);
        }
        financieraMidRequest.post('disponibilidad/', solicitud).then(function(response){
          self.alerta_registro_cdp = response.data;
          angular.forEach(self.alerta_registro_cdp, function(data){
            if (data === "error" || data === "success" || data == undefined){

            }else{
              self.alerta = self.alerta + data + "\n";
            }


          });
          swal("Alertas", self.alerta, self.alerta_registro_cdp[0]).then(function(){

                self.alerta = "";
                $("#myModal").modal('hide');
                $window.location.reload();
              });
          //alert(data);
        });
    };
    self.gridOptions.multiSelect = false;
    //ver el detalle de la solicitud
    self.gridOptions.onRegisterApi = function(gridApi){
      self.gridApi = gridApi;
      gridApi.selection.on.rowSelectionChanged($scope,function(row){
        $("#myModal").modal();
        $scope.apropiacion= undefined;
          $scope.apropiaciones = [];
      		self.data = row.entity;
          console.log(self.data);
        argoRequest.get('fuente_financiacion_rubro_necesidad','query=SolicitudNecesidad.Id:'+self.data.SolicitudDisponibilidad.Necesidad.Id).then(function(response) {

          angular.forEach(response.data, function(data){
            if($scope.apropiaciones.indexOf(data.Apropiacion) !== -1) {

            }else{
              $scope.apropiaciones.push(data.Apropiacion);
            }
            });
      	});

      });

    };
     //-----------------------------

     self.Rechazar = function (){
       var solicitud = self.gridApi.selection.getSelectedRows();
       $("#myModal").modal('hide');
       swal({
         title: 'Indique una justificación por el rechazo',
         input: 'textarea',
         showCancelButton: true,
         inputValidator: function (value) {
           return new Promise(function (resolve, reject) {
             if (value) {
               resolve();
             } else {
               reject('Por favor indica una justificación!');
             }
           });
         }
       }).then(function(text) {
         console.log(text);
         solicitud[0].SolicitudDisponibilidad.JustificacionRechazo = text;
         console.log(solicitud[0].SolicitudDisponibilidad);
         var sl = solicitud[0].SolicitudDisponibilidad;
           argoRequest.put('solicitud_disponibilidad/', sl.Id , sl).then(function(response) {
             console.log(response.data);
             self.actualiza_solicitudes();
             if (response.data.Type !== undefined) {
               if (response.data.Type === "error") {
                 swal('', $translate.instant(response.data.Code), response.data.Type);
                   self.actualiza_solicitudes();
               } else {
                 swal('', $translate.instant(response.data.Code) + response.data.Body.Consecutivo, response.data.Type).then(function() {

                     self.actualiza_solicitudes();
                 });
               }

             }

           });

       });
     };


  });
