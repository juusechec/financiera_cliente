"use strict";

/**
 * @ngdoc function
 * @name financieraClienteApp.decorator:TextTranslate
 * @description
 * # TextTranslate
 * Decorator of the financieraClienteApp
 */
var text_es = {
  TITULO: "GENERATOR-OAS",
  MENSAJE_INICIAL: "Ahora puede comenzar con el desarrollo ...",
  //NOTIFICACIONES
  NOTIFICACION_PENDIENTE: "Notificaciones Pendientes",
  NOTIFICACION_VISTA: "Notificaciones Vistas",
  FILTRO_NOTIFICACION: "Filtrar notificación",

  //GENERALES
  CLASIFICACION: "Clasificación",
  CODIGO_PADRE: "Código Padre",
  CODIGO: "Código",
  NOMBRE: "Nombre",
  DESCRIPCION: "Descripción",
  NATURALEZA: "Naturaleza",
  SALDO: "Saldo",
  DISPONIBLE: "Disponible",
  VIGENCIA: "Vigencia",
  FECHA_CREACION: "Fecha Creación",
  TIPO_DOCUMENTO: "Tipo Documento",
  ESTADO: "Estado",
  OPERACION: "Operación",
  ENTIDAD: "Entidad",
  UNIDAD_EJECUTORA: "Unidad Ejecutora",
  SELECCION_UNIDAD_EJECUTORA: "Seleccionar Unidad Ejecutora",
  DETALLE_UNIDAD_EJECUTORA: "Detalle Unidad Ejecutora",
  PROVEEDOR: "Proveedor",
  SELECCIONE_PROVEEDOR: "Seleccionar Proveedor",
  DETALLE_PROVEEDOR: "Detalle Proveedor",
  REGISTRO_PRESUPUESTAL: "Certificado Registro Presupuestal",
  CRP: "CRP",
  SELECCIONE_CRP: "Seleccione CRP",
  DETALLE_CRP: "Detalle CRP",
  VALOR: "Valor",
  FUENTES_FINANCIACION: "Fuentes Financiación",
  FUENTE_FINANCIACION_CODIGO: "Código Fuente",
  CONCEPTOS: "Conceptos",
  CONCEPTO: "Concepto",
  TIPO: "Tipo",
  AFECTACION: "Afectación",
  CUENTAS_CONTABLES: "Cuentas Contables",
  DEBITO: "Débito",
  CREDITO: "Crédito",
  CUENTA: "Cuenta",
  DEPENDENCIA: "Dependencia",
  IMPUESTOS_DESCUENTOS: "Impuestos y Descuentos",
  IMPUESTOS: "Impuestos",
  NUEVO: "Nuevo",
  CUENTA_CONTABLE: "Cuenta Contable",
  PORCENTAJE: "Porcentaje",
  BASE_UVT: "Base UVT",
  DEDUCIBLE: "Deducible",
  SELECCION_OPCION: "Selecciona una opción",
  ACTUALIZAR: "Actualizar",
  PLAN_CUENTAS: "Plan de Cuentas",
  OBSERVACIONES: "Observaciones",
  MOVIMIENTOS: "Movimientos",
  INICIAL: "Inicial",
  FECHA: "Fecha",
  CREACION: "Creación",
  VENCIMIENTO: "Vencimiento",
  INGRESO: "Ingreso",
  EGRESO: "Egreso",
  NOMINA: 'Nomina',
  PLANTA: 'Planta',
  TIPO_EMPLEADO: 'Tipo Empleado',
  MES: 'Mes',
  MES_ENERO: 'Enero',
  MES_FEBRERO: 'Febrero',
  MES_MARZO: 'Marzo',
  MES_ABRIL: 'Abril',
  MES_MAYO: 'Mayo',
  MES_JUNION: 'Junio',
  MES_JULIO: 'Julio',
  MES_AGOSTO: 'Agosto',
  MES_SEPTIEMBRE: 'Septiembre',
  MES_OCTUBRE: 'Octubre',
  MES_NOBIEMBRE: 'Nobiembre',
  MES_DICIEMBRE: 'diciembre',
  NO_QUINCENA: 'Nro. Quincena',
  PRIMERA: 'Primera',
  SEGUNADA: 'Segunda',
  ELABORADO_POR: 'Elaborado Por',
  VINCULACION: 'Vinculacion',
  LIQUIDACION: 'Liquidacion',
  BANCO: 'Banco',
  BANCOS: "Bancos",
  COMPANIA : 'Compañia',
  FECHA_REGISTRO: "Fecha de Registro",
  FECHA_INICIO: "Fecha Inicio",
  FECHA_FIN: "Fecha final",
  TOTAL_COMPROMETIDO: "Total Comprometido",
  TOTAL_ANULADO: "Total Anulado",
  AFECTACION_CONTABLE: "Afectación Contable",
  DENOMINACION: 'Denominación',
  CODIGO_SUPER: 'Codigo Superintendencia',
  ACH: 'ACH',
  FACULTAD: "Facultad",
  FECHA_INICIO: "Fecha de inicio",
  FECHA_FINAL: "Fecha Final",
  ORIGEN: "Origen",
  CALENDARIO_TRIBUTARIO: "Calendario Tributario",
  FINALIZAR: "Finalizar",
  SELECCIONAR_VIGENCIA: "Seleccione una Vigencia",
  VALOR_BASE: "Valor Base",
  TODOS: "Todos",
  DIFERENCIA: "Diferencia",
  VALOR_APLICADO: "Valor Aplicado",
  TOTAL: "Total",
  SEGUDIDAD_SOCIAL: "Seguridad Social",
  DETALLE: "Detalle",
  FINANCIERO: "Financiero",
  CONTRATO: "Contrato",
  CONSECUTIVO: "#",
  NOMBRES: "Nombres",

  // PROVEEDOR
  TIPO_PERSONA: "Tipo Persona",
  NO_DOCUMENTO: "No. Documento",
  DIRECCION: "Dirección",
  TELEFONO: "Teléfono",
  CUENTA_BANCARIA: "Cuenta Bancaria",
  SUCURSAL: "Sucursal",
  SUCURSALES: "Sucursales",
  TIPO_CUENTA: "Tipo Cuenta",
  ENTRADA_ALMACEN: "Entrada De Almacén",
  SEDE: "Sede",
  FACTURA: "Factura",
  SELECCIONAR: "Seleccionar",
  DURACION: "Duración",

  //REGISTRO PRESUPUESTAL
  NO_CRP: "No. CRP",
  RESPONSABLE: "Responsable",
  VALOR_CRP: "Valor CRP",
  CDP: "CDP",
  NO_CDP: "No. CDP",
  COMPROMISO: "Compromiso",
  DESCRIPCION_COMPROMISO: "Descripción Compromiso",

  //PLAN DE CUENTAS
  PLANES_CUENTAS: "Planes de Cuentas",
  NUEVO_PLAN_CUENTAS: "Crear Nuevo Plan de cuentas",
  INGRESE_NOMBRE_PLAN_CUENTAS: "Ingresa el nombre del plan de cuentas",
  DESCRIPCION_PLAN: " Descripción del nuevo plan...",
  PLAN_CUENTAS_MAESTRO: "Plan de Cuentas Maestro",
  NUEVA_CUENTA: "Nueva Cuenta",
  EDITAR_PLAN_CUENTAS: "Editar plan de Cuentas",
  CUENTAS_SELECCIONADAS:"Cuentas Seleccionadas",
  SELECCIONAR_DESCUENTOS: "Selecciona Impuestos y Descuentos",
  ALERTA_SELECCIONAR_CUENTA: "Es necesario seleccionar la cuenta contable",
  ALERTA_SELECCIONAR_PROVEEDOR: "Es necesario selecccionar un proveedor",
  ALERTA_SELECCIONAR_CUENTA_SIN_HIJOS: "Unicamente se pueden seleccionar cuentas que no tengan hijos",

  //MOVIMIENTOS CUENTAS_CONTABLES
  PRINCIPIO_PARTIDA_DOBLE_CUMPLE: "¡El principio de la partida Doble o dualidad se cumple!",
  PRINCIPIO_PARTIDA_DOBLE_ADVERTENCIA: "¡Recuerda que la suma de los montos debitados y de los montos acreditados debe ser la misma e igual al valor dado sobre el concepto!",


  //DIRECTIVE/CUENTAS_CONTABLES/PLANES_CUENTAS
  D_PLANES_CUENTA: {
    LISTADO_PLAN_CUENTAS: "Listado de Planes de Cuentas",
    NO_FILAS: "Número de Filas"
  },

  BTN: {
    VER: "Ver",
    SELECCIONAR: "Seleccionar",
    CANCELAR: "Cancelar",
    CONFIRMAR: "Confirmar",
    AGREGAR: "Agregar",
    REGISTRAR: "Registrar",
    SOLICITAR_RP: "Solicitar RP",
    QUITAR_RUBRO: "Quitar",
    QUITAR: "Quitar",
    APROBAR: "Aprobar",
    EDITAR: "Editar",
    LIMPIAR: "Limpiar",
    GUARDAR: "Guardar",
    NUEVO: "Nuevo",
    BORRAR: "Borrar",
    RECHAZAR: "Rechazar",
    CONFIGURAR: "Configurar",
    ANADIR: "Añadir",
    NUEVO_OP_PROVEEDOR: 'Nuevo OP Proveedor',
    NUEVO_OP_PLANTA: 'Nuevo OP Planta',
    NUEVO_OP_SEGURIDAD_SOCIAL: 'Nuevo OP Seguridad Social',
  },

  // ORDEN DE PAGO
  ORDEN_PAGO: "Órdenes de Pago",
  ORDEN_PAGO_SELECCIOANR: "Seleccionar Orden de Pago",
  ORDEN_PAGO_ACTUALIZAR: "Actualizar Órdenes de Pago",
  DETALLE_ORDEN_PAGO: 'Detalle Orden de Pago',
  VALOR_PAGO: "Valor Pago",
  DETALLE_VALOR_PAGO: "Detalle Valor Pago",
  DETALLE_OP: "Detalle Orden de Pago",
  VALOR_BASE_RETENCION: "Valor Base Retención",
  POR_IVA: "% IVA",
  VAL_IVA: "Valor IVA",
  VALOR_BRUTO: "Valor Bruto",
  MSN_DEBE_UNIDAD: "Debe Seleccionar la Unidad Ejecutora",
  MSN_DEBE_PROVEEDOR: "Debe Seleccionar el Proveedor para la Orden de Pago",
  MSN_DEBE_REGISTRO: "Debe Seleccionar el Registro Presupuestal",
  MSN_DEBE_TIPO_OP: "Debe Seleccionar el Tipo de Documento en la Sección Valor del Pago",
  MSN_DEBE_IVA: "Debe Indicar el Valor del Iva en la Sección Valor del Pago",
  MSN_DEBE_VAL_BASE: "Debe Indicar el Valor Base en la Sección Valor del Pago",
  MSN_DEBE_CONCEPTO: "Debe Seleccionar por lo Minimo un Comcepto",
  MSN_DEBE_TOTAL_AFECTACION: "El Valor Total de la Afectacion es Distinto al Valor de la Orden de Pago",
  MSN_DEBE_MIN_CONCEPTO: "Debe Afectar por lo Menos un concepto",
  MSN_TOTAL_AECTACION: "El Total de la Afectación a los Conceptos del Rubro",
  MSN_SUPERA_SALDO: 'Supera el Valor del Saldo',
  MSN_Y: 'y',
  MSN_DEBE_LIQUIDACION: "Debe Seleccionar una Liquidación",
  MSN_DEBE_MES_SS: "Debe Seleccionar el mes de la Seguridad Social",
  //CONCEPTOS
  AFECTACION_CONCEPTO: "Ingresar Afectación por Conceptos",
  OPERAR_CONCEPTO: "Operar Concepto",

  //Rubro
  RUBRO: "Rubro",
  REGISTRO_RUBRO: "Registro de Rubro",
  CONSULTA_RUBRO: "Consulta de Rubros",
  CONSULTA_APROBACION_INICIAL: "Consulta de Apropiación Inicial",
  APROBACION_PRESUPUESTO: "Aprobación de Presupuesto",
  SELECCIONAR_RUBRO: "Seleccionar Rubro",
  RUBROS: "Rubros",

  //FUENTES DE FINANCIAMIENTO

  TITULO_FUENTES_CREAR: "Crear Fuentes de Financiamiento",
  TITULO_FUENTES_CONSULTAR: "Consultar Fuentes de Financiamiento",
  TITULO_FUENTES_DETALLE: "Detalle Fuentes de Financiamiento",
  INGRESAR_MONTO: "Ingresar Monto",
  FUENTE_FINANCIAMIENTO: "Fuente de Financiamiento",
  FUENTES_FINANCIAMIENTO: "Fuentes de Financiamiento",
  FORMULARIO_FUENTE: "Formulario Creación Fuente de Financiamiento",
  SIGLA: "Sigla",
  INGRESE_SIGLA: "Ingrese la Sigla",
  INGRESE_CODIGO: "Ingrese el Codigo",
  INGRESE_DESCRIPCION: "Ingrese la Descripcion",
  INGRESE_VALOR_TOTAL: "Ingrese el Valor Total",
  RUBRO_SELECCIONADO: "Rubro Seleccionado",
  RUBROS_ASIGNADOS_FUENTE: "Rubros Asignados Fuente de Financiamiento",
  INGRESE_FECHA_REGISTRO: "Ingrese Fecha de Registro",
  INGRESAR_VALOR_FUENTE: "Ingresar Valor Total Fuente de Financiamiento",
  SELECCIONAR_DEPENDENCIA: "Seleccione la Dependencia",
  SELECCIONE_DEPENDENCIA: "Seleccione la Dependencia",
  SELECCIONE_RUBROS_FUENTE: "Seleccione los Rubros de la Fuente de Financiamiento",
  ANULACION_FUENTE_FINANCIAMIENTO: "Anular Fuente de Financiamiento",
  CREAR_FUENTE: "Asignar Fuente Financiamiento",
  QUITAR: "Quitar",
  QUITAR_RUBRO: "Quitar Rubro",
  AGREGAR_DEPENDENCIA: "Agregar Dependencia",
  SELECCIONE_FUENTE_FINANCIAMIENTO: "Seleccione la Fuente de Financiamiento",
  SELECCIONE_TIPO: "Seleccione el tipo de Modificación Presupuestal",
  MODIFICACIONES_PRESUPUESTALES: "Modificaciones Presupuestales",
  MODIFICACION_PRESUPUESTAL: "Modificación Presupuestal",
  TIPO_MODIFICACION: "Tipo de Modificación Presupuestal",
  INGRESE_VALOR_DEPENDENCIA: "Ingrese el Valor de la Dependencia",
  INGRESE_DEPENDENCIA: "Ingrese la Dependencia",
  REGISTRO_CORRECTO: "Se Registro Correctamente",
  PROCESO_COMPLETADO: "Proceso Completado",
  MONTO_MAYOR_FUENTE_FINANCIAMIENTO: "El Monto Ingresado No Corresponde al Valor de la Fuente de Financiamiento",
  DEPENDENCIAS: "Dependecias",
  ANULAR_PRESUPUESTO: "Anular Presupuesto",

  //CDP
  TITULO_SOLICITUD_CDP: "Solicitudes de Certificado de Disponibilidad Presupuestal",
  LISTA_SOLICITUD_ANULACION_CDP: "Lista de Solicitudes de Anulación de Disponibilidad",
  SOLICITUD_CDP: "Solicitud de CDP No.",
  DEPENDENCIA_SOLICITANTE: "Dependencia Solicitante",
  JEFE_DEPENDENCIA: 'Jefe de la Dependencia',
  DEPENDENCIA_DESTINO: 'Dependencia Destino',
  ORDENADOR_GASTO: 'Ordenador del Gasto',
  OBJETO_CONTRACTUAL: 'Objeto Contractual ',
  VALOR_CONTRATACION: 'Valor De La Contratación',
  JUSTIFICACION: 'Justificación',
  AFECTACION_PRESUPUESTAL: "Afectación Presupuestal",
  VALOR_AFECTACION: "Valor afectación",
  VALOR_AFECTACION_FUNCIONAMIENTO: "Valor de la Afectación (Funcionamiento)",
  LISTA_CDP: "Lista De Certificados De Disponibilidad Presupuestal",
  DATOS_NECESIDAD: "Datos de la Necesidad",
  NECESIDAD: "Necesidad",
  NECESIDAD_NO: "Necesidad No. ",
  RESPONSABLE_SELECCION_PRESUPUESTO: "Responsable Sección De Presupuesto",
  OBJETO: "Objeto",

  //AVANCES
  ETAPA: "Etapa",
  REQUISITOS_AVANCE: "Requisitos de Avance",
  LISTA_REQUISITOS_AVANCE: "listado de Requisitos de Avance",
  AVANCES: 'AVANCES',
  LISTA_AVANCES: 'Listado de Tipos de Avances',
  REFERENCIA: 'Referencia',
  NUEVO_TIPO_AVANCE: 'Nuevo Tipo de Avance',
  EDITAR_TIPO_AVANCE: 'Editar Tipo de Avance',
  NUEVO_REQUISITO_AVANCE: 'Nuevo Requisito de Avance',
  EDITAR_REQUISITO_AVANCE: 'Editar Requisito de Avance',
  LISTA_CDP_ANULACION: "Lista De Certificados De Disponibilidad Presupuestal a Anular",
  ANULACION_CDP_TITULO_FORM: "Anulación de CDP",
  MOTIVO_ANULACION_CDP: "Motivo de la Anulación",
  TIPO_ANULACION: "Tipo de Anulación",
  SELECCIONE: "Seleccione",
  REQUISITOS: "Requisitos",
  ACTIVO: "Activo",
  INACTIVO: "Inactivo",
  SOLICITUD: "Solicitud",
  LEGALIZACION :"Legalización",
  SOLICITUD_AVANCE: "Solicitud de Avance",
  APELLIDOS:"Apellidos",
  CORREO_ELECTRONICO:"Correo Electrónico",
  DOCUMENTO:"Documento",
  LUGAR_DOCUMENTO:"Lugar de Expedición",
  NUMERO_TELEFONICO:"Número telefónico",
  NUMERO_CELULAR:"Numero Celular",
  INFORMACION_TERCERO:"Información de Terceros",
  DESCRIPCION_AVANCES:"Descripción de Avances",
  DETALLE_AVANCES:"Detalle de Avances",
  OBJETIVO:"Objetivo",
  VALOR_AVANCE:"Valor de Avance",
  PROYECTO_CURRICULAR:"Proyecto Curricular",
  CONVENIO:"Convenio",
  CODIGO_CONVENIO: "Código de Convenio",
  NOMBRE_CONVENIO:"Nombre del Convenio",
  PROYECTO_INVESTIGACION:"Proyecto de Investigación",
  CODIGO_PROYECTO:"Código del Proyecto",
  NOMBRE_PROYECTO:"Nombre del Proyecto",
  TIPO_AVANCE:"Tipo de Avance",

  //ANULACIONES
  ANULACION_PARCIAL: "Parcial",
  ANULACION_TOTAL: "Total",
  SELECCION_RUBRO: "Seleccione el Rubro",
  ANULAR: "Anular",
  NO: "No. ",
  ELIMINARA: "Se eliminará",
  ELIMINADO: "Eliminado",
  ACTUALIZADO: "Actualizado",
  FUE_ELIMINADO: "ha sido eliminado",
  FUE_ACTUALIZADO: "ha sido actualizado",
  AGREGAR_REQUISITO: "Añadir Requisito",

  //RP
  LISTA_RP_ANULACION: "Lista de Registros Presupuestales a Anular",
  CDP_NUMERO: "CDP No.",
  BENEFECIARIO: "Beneficiario",
  MODALIDAD_DE_SELECCION: "Modalidad de Selección",
  OFICIO: "Oficio No.",
  //INGRESOS
  REGISTRO_INGRESOS: "Registro de Ingresos",
  FECHA_CONSIG: "Fecha de Consignanción",
  TIPO_INGRESO: "Tipo de Ingreso",
  TABLA_INGRESOS_BANCO: "Lista de Consignaciones",
  DATOS_REG_INGRESO: "Datos para este ingreso",
  INGRESO_NO: "Ingreso No.",
  CONSULTA_INGRESOS: "Consulta Ingresos",
  MOTIVO_RECHAZO: "Motivo del rechazo",
  PAGO_REPORTADO: "Pago reportado",
  MATRICULA: "Matricula",
  SEGURO: "Seguro",
  CARNET: "Carnet",

  //PAC
  GENERACION_PAC: "Generar Reporte Pac",

  //CODIGOS

  S_543: "Se registro exitosamente",
  S_554: "Se eliminio exitosamente",
  S_544: "Se Aprobo el Ingreso con el consecutivo ",
  S_545: "Se Rechazo el Ingreso con el consecutivo ",
  S_588: "El registro se actualizó exitosamente",
  S_A12: "Operación para Anulación Correctamente Realizada para la solicitud",
  E_23503: "No se encontraron algunos campos", //FK
  E_0458: "Los datos enviados son erroneos",
  E_22001: "La longitud de uno de los valores ingresados excede al maximo permitido",
  S_A01: "Se Rechazo la Solicitud ",

  S_OPP_01: "Orden de Pago Registrado Exitosamente con Consecutivo No. ",
  E_25P02: "Este registro ya ha sido creado. ",
  E_A12: "Valor a anular supera el saldo de la disponibilidad en el rubro seleccionado",
  // Errores Orden Pago
  //Proveedores
  //OP Nomina api_mid_financiera
  E_OPN_01_1: "Error en la estructura de datos para Crear a OP de Nomina. ",
  E_OPN_01_2: "No se obtubo Id de la liquidacion. ",
  E_OPN_01_3: "No se obtubo información del detalle de la liquidacion del modulo Titan. ",
  E_OPN_01_4: "No se se cuenta con un detalle de la liquidacion del modulo Titan. ",
  E_OPN_01_5: "Error en la comunicacion con los servicios de Kronos. ",
  //OP Nomina api_financiera
  E_OPN_02: "Error al intentar registrar la Orden de pago. ",
  E_OPN_02_1: "Error al obtener Valor Calculado del detalle de la liquidación. ",
  E_OPN_02_2: "Error al obtener el Id del Concepto de Titan en detalle de la liquidación. ",
  E_OPN_02_3: "Id Concepto Titan no cuenta con concepto Homologador en kornos. ",
  E_OPN_02_4: "Error al intentar registrar los concepto_orden_pago. ",
  E_OPN_02_5: "Error al intentar registrar Movimeitos Contables. "

};

var text_en = {
  TITULO: "GENERATOR-OAS",
  MENSAJE_INICIAL: "Now get to start to develop",
  //NOTIFICACIONES
  NOTIFICACION_PENDIENTE: "Notificaciones Pendientes",
  NOTIFICACION_VISTA: "Notificaciones Vistas",
  FILTRO_NOTIFICACION: "Filtrar notificación",

  //GENERALES
  CLASIFICACION: "Classification",
  CODIGO_PADRE: "Father Code",
  CODIGO: "Code",
  NOMBRE: "Name",
  DESCRIPCION: "Description",
  NATURALEZA: "Nature",
  SALDO: "Balance",
  DISPONIBLE: "Disponible",
  VIGENCIA: "Validity",
  FECHA_CREACION: "Creation Date",
  TIPO_DOCUMENTO: "Document Type",
  ESTADO: "State",
  OPERACION: "Operation",
  ENTIDAD: "Entity",
  UNIDAD_EJECUTORA: "Executing Unit",
  SELECCION_UNIDAD_EJECUTORA: "Select Executing Unit",
  DETALLE_UNIDAD_EJECUTORA: "Detail Executing Unit",
  PROVEEDOR: "Provider",
  SELECCIONE_PROVEEDOR: "Select Provider",
  DETALLE_PROVEEDOR: "Detail Provider",
  REGISTRO_PRESUPUESTAL: "Certificate Registry Budget",
  SELECCIONE_CRP: "Select CRP",
  DETALLE_CRP: "Detail CRP",
  VALOR: "Value",
  FUENTES_FINANCIACION: "Sources of funding",
  FUENTE_FINANCIACION_CODIGO: "Code Sources of funding",
  CONCEPTOS: "Concepts",
  CONCEPTO: "Concept",
  TIPO: "Type",
  AFECTACION: "Affectation",
  CUENTAS_CONTABLES: "Accounting Accounts",
  DEBITO: "Debit",
  CREDITO: "Credit",
  CUENTA: "Account",
  ACTUALIZAR: "Update",
  NOMINA: 'Roster',
  PLANTA: 'Floor',
  TIPO_EMPLEADO: 'Employee Type',
  MES: 'Month',
  MES_ENERO: 'January',
  MES_FEBRERO: 'February',
  MES_MARZO: 'March',
  MES_ABRIL: 'April',
  MES_MAYO: 'May',
  MES_JUNION: 'June',
  MES_JULIO: 'July',
  MES_AGOSTO: 'August',
  MES_SEPTIEMBRE: 'september',
  MES_OCTUBRE: 'October',
  MES_NOBIEMBRE: 'November',
  MES_DICIEMBRE: 'December',
  NO_QUINCENA: 'Nro. Fortnight',
  PRIMERA: 'Frist',
  SEGUNADA: 'Second',
  ELABORADO_POR: 'Elaborated By',
  VINCULACION: 'Bonding',
  LIQUIDACION: 'Liquidation',
  COMPANIA : 'Company',
  // PROVEEDOR
  TIPO_PERSONA: "Type Person",
  NO_DOCUMENTO: "No. Document",
  DIRECCION: "Address",
  TELEFONO: "Phone",
  CUENTA_BANCARIA: "Bank Account",
  SUCURSAL: "Branch Office",
  TIPO_CUENTA: "Account Type",
  ENTRADA_ALMACEN: "Warehouse Entryss",
  SEDE: "Headquarters",
  FACTURA: "Bill",
  SELECCIONAR: "Select",
  //REGISTRO PRESUPUESTAL
  NO_CRP: "No. CRP",
  RESPONSABLE: "Responsible",
  VALOR_CRP: "Value CRP",
  NO_CDP: "No. CDP",
  COMPROMISO: "Commitment",
  DESCRIPCION_COMPROMISO: "Description Commitment",

  //PLAN DE CUENTAS
  PLANES_CUENTAS: "Planes de Cuentas",
  NUEVO_PLAN_CUENTAS: "Crear Nuevo Plan de cuentas",
  INGRESE_NOMBRE_PLAN_CUENTAS: "Ingresa el nombre del plan de cuentas",
  DESCRIPCION_PLAN: " Descripción del nuevo plan...",
  PLAN_CUENTAS_MAESTRO: "Plan de Cuentas Maestro",
  NUEVA_CUENTA: "Nueva Cuenta",
  EDITAR_PLAN_CUENTAS: "Editar plan de Cuentas",

  //DIRECTIVE/CUENTAS_CONTABLES/PLANES_CUENTAS
  D_PLANES_CUENTA: {
    LISTADO_PLAN_CUENTAS: "Listado de Planes de Cuentas",
    NO_FILAS: "Número de Filas"
  },

  BTN: {
    VER: "Ver",
    SELECCIONAR: "Select",
    CANCELAR: "Cancelar",
    CONFIRMAR: "Confirmar",
    AGREGAR: "Agregar",
    REGISTRAR: "Registrar",
    SOLICITAR_RP: "Solicitar RP",
    QUITAR_RUBRO: "Quitar",
    APROBAR: "Aprobar",
    ANULAR: "Anular",
},
    NUEVO_OP_PROVEEDOR: 'New PO Supplier',
    NUEVO_OP_PLANTA: 'New PO Floor',

  // ORDEN DE PAGO
  ORDEN_PAGO: "Payment Orders",
  ORDEN_PAGO_SELECCIOANR: "Select Payment Order",
  ORDEN_PAGO_ACTUALIZAR: "Update Payment Orders",
  DETALLE_ORDEN_PAGO: 'Detail Payment Orders',
  DETALLE_OP: "Detail Payment Orders",
  VALOR_PAGO: "Amount Paid",
  DETALLE_VALOR_PAGO: "Detail Value Paid",
  VALOR_BASE_RETENCION: "Base Value Withholding",
  POR_IVA: "% IVA",
  VAL_IVA: "Value IVA",
  VALOR_BRUTO: "Gross Value",
  MSN_DEBE_UNIDAD: "You must select Executing Unit",
  MSN_DEBE_PROVEEDOR: "You must select Supplier for the Payment Order",
  MSN_DEBE_REGISTRO: "You must select Certificate Registry Budget",
  MSN_DEBE_TIPO_OP: "You must select el tipo de Documento en la in Payment Amount Section",
  MSN_DEBE_IVA: "You must indicate the value of the IVA in the Payment Value Section",
  MSN_DEBE_VAL_BASE: "You must indicate the Base Value in the Payment Value Section",
  MSN_DEBE_CONCEPTO: "You must select at least one Concept",
  MSN_DEBE_TOTAL_AFECTACION: "The total value of the assignment is different from the value of the payment order",
  MSN_DEBE_MIN_CONCEPTO: "Must affect at least one concept",
  MSN_TOTAL_AECTACION: "The total of the affectation to the Concepts of the Rubro",
  MSN_SUPERA_SALDO: 'exceeds the value of the balance',
  MSN_Y: 'and',
  MSN_DEBE_LIQUIDACION: "You must select a liquidation",
  //CONCEPTOS
  AFECTACION_CONCEPTO: "Enter Affection for Concept",
  OPERAR_CONCEPTO: "Operate Concept",

  //Rubro
  RUBRO: "Rubro",
  REGISTRO_RUBRO: "Registro de Rubro",
  CONSULTA_RUBRO: "Consulta de Rubros",
  CONSULTA_APROBACION_INICIAL: "Consulta de Apropiación Inicial",
  APROBACION_PRESUPUESTO: "Aprobación de Presupuesto",
  SELECCIONAR_RUBRO: "Select Item"
};

angular.module('financieraClienteApp')
  .config(function($translateProvider) {
    $translateProvider
      .translations("es", text_es)
      .translations("en", text_en);
    $translateProvider.preferredLanguage("es");
    $translateProvider.useSanitizeValueStrategy("sanitizeParameters");
  });
