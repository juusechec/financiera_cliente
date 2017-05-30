'use strict';

/**
 * @ngdoc function
 * @name financieraClienteApp.controller:OrdenPagoPlantaOpPlantaCrearCtrl
 * @description
 * # OrdenPagoPlantaOpPlantaCrearCtrl
 * Controller of the financieraClienteApp
 */
angular.module('financieraClienteApp')
  .controller('OpPlantaCrearCtrl', function($scope, financieraRequest, $window, $translate) {
    var self = this;
    self.PestanaAbierta = true;
    self.OrdenPago = {};
    self.OrdenPagoConsulta = {};
    self.OrdenPagoConsulta.Proveedor = {Id: 469};
    self.dataLiquidacionConsulta = {};
    self.dataliquidacion = {};
    // obtener vigencia
    financieraRequest.get("orden_pago/FechaActual/2006") //formato de entrada  https://golang.org/src/time/format.go
      .then(function(data) { //error con el success
        self.OrdenPago.Vigencia = data.data;
        self.dataLiquidacionConsulta.Vigencia = self.OrdenPago.Vigencia;
      })
    // ***************
    // Funciones
    // ***************
    self.validar_campos = function() {
      self.MensajesAlerta = '';
      if (self.OrdenPago.UnidadEjecutora == undefined) {
        self.MensajesAlerta = self.MensajesAlerta + "<li>" + $translate.instant('MSN_DEBE_UNIDAD') + "</li>"
      }
      if (self.OrdenPago.RegistroPresupuestal == undefined) {
        self.MensajesAlerta = self.MensajesAlerta + "<li>" + $translate.instant('MSN_DEBE_REGISTRO') + "</li>"
      }
      if (self.OrdenPago.Liquidacion == undefined) {
        self.MensajesAlerta = self.MensajesAlerta + "<li>" + $translate.instant('MSN_DEBE_LIQUIDACION') + "</li>"
      }
      // Operar
      if (self.MensajesAlerta == undefined || self.MensajesAlerta.length == 0) {
        // insertc
        console.log("Insertar DATA");
        /*financieraRequest.post("orden_pago/RegistrarOpProveedor", self.dataOrdenPagoInsert)
          .then(function(data) { //error con el success
            self.resultado = data;
            //mensaje
            swal({
              title: 'Registro Exitoso',
              text: 'Orden de Pago Proveedo Registrado Exitosamente con Consecutivo No. ' + self.resultado.data,
              type: 'success',
            }).then(function() {
              $window.location.href = '#/orden_pago/ver_todos';
            })
            //
          })*/
      } else {
        // mesnajes de error
        swal({
          title: 'Error!',
          html: '<ol align="left">' + self.MensajesAlerta + '</ol>',
          type: 'error'
        })
      }
    }
    //
    self.addOpPlantaCrear = function() {
      console.log(self.OrdenPago)
      self.validar_campos()
    }
  });
