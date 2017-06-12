'use strict';

describe('Controller: SolicitudAvanceCtrl', function () {

  // load the controller's module
  beforeEach(module('financieraClienteApp'));

  var SolicitudAvanceCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SolicitudAvanceCtrl = $controller('SolicitudAvanceCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SolicitudAvanceCtrl.awesomeThings.length).toBe(3);
  });
});
