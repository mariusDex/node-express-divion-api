const pool = require("../database/index")
const SQL_ENCUESTAS_CENTRO = ' SELECT pregunta ' +
                             ' FROM ENCUESTA '+
                             ' WHERE idCentro = ?; ';

const encuestaController = {

    // TODAS LAS CITAS DE UNA FAMILIA 
    encuestasByIdCentro: async (req,res) => {
        try {
            const { idCentro } = req.params;
            var sql = SQL_ENCUESTAS_CENTRO;

            // ==== QUERY CALL ==== //
            var [rows, fields] = await pool.query(sql,[idCentro]); 
            res.json({
                data : rows 
            })
            
        } catch (error) {
            console.log(error)
            res.json({
                status: "Error en encuestasByIdCentro --> encuestaController."
            })
        }
    }
};


module.exports = encuestaController;