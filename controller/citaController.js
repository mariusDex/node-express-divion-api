const pool = require("../database/index")
const SQL_CITAS_FAMILIA = 'SELECT c.horaInicio, c.horaFin, c.nombre AS nombreCita, ' +
                          ' cent.nombre AS nombreCentro, c.fecha, p.nombreCompleto AS nombreCompletoPersonal,  cent.direccion, c.completada '+
                          'FROM CITA c '+
                          'JOIN CENTRO cent ON c.idCentro = cent.idCentro '+
                          'JOIN PERSONAL p ON c.idPersonal = p.idPersonal '+
                          'JOIN FAMILIA f ON c.idFamilia = f.idFamilia '+
                          'WHERE f.idFamilia = ? ' + 
                          'ORDER BY CASE WHEN c.completada = \'NO\' THEN 0 ELSE 1 END, c.completada DESC LIMIT 10; ';

const citaController = {

    // TODAS LAS CITAS DE UNA FAMILIA 
    citasById: async (req,res) => {
        try {
            const { idFamilia } = req.params;
            var sql = SQL_CITAS_FAMILIA;

            // ==== QUERY CALL ==== //
            var [rows, fields] = await pool.query(sql,[idFamilia]); 
            res.json({
                data : rows 
            })
            
        } catch (error) {
            console.log(error)
            res.json({
                status: "Error en citasById --> citaController."
            })
        }
    }
};


module.exports = citaController;