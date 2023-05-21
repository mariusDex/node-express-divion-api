const express = require("express")
const router = express.Router()

// ======= IMPORTS DE CLASES CONTROLADORAS ====== //
const citaController = require("../controller/citaController");
const personalController = require("../controller/personalController");
const encuestaController = require("../controller/encuestaController");
const centroController = require("../controller/centroController");
const familiaController = require("../controller/familiaController");
// CITAS MANAGEMENT // 

router.get("/citas/:idFamilia", citaController.citasById);
router.get("/citas/delete/:idCita", citaController.deleteCita);

// PERSONAL MANAGEMENT //

router.get("/personal/contactos/:idPersonal", personalController.getContactosById);
router.get("/personal/login/:correo/:pass", personalController.logIn);

// ENCUESTA MANAGEMENT //

router.get("/encuestas/:idCentro", encuestaController.encuestasByIdCentro);

// CENTROS MANAGEMENT //

router.get("/centros", centroController.getAllCentros);
router.get("/centros/:idFamilia", centroController.getCentroByFamiliaId);

// FAMILIA MANAGEMENT // 

router.get("/familias/:idFamilia", familiaController.getAllInfoFamilia); // deprecado
router.get("/familias/login/:correo/:pass", familiaController.logIn);

module.exports = router