const pool = require("../database/index")
const SQL_CENTROS = ' SELECT * FROM CENTRO ';
const SQL_CENTRO_BY_FAMILIA_ID = ' SELECT c.* '+
                                 ' FROM CENTRO c '+
                                 ' INNER JOIN FAMILIA f ON c.idCentro = f.idCentro ' +
                                 ' WHERE f.idFamilia = ? ';
const centroController = {

    // TODAS LAS CITAS DE UNA FAMILIA 
    getAllCentros: async (req,res) => {
        try {
           
            var sql = SQL_CENTROS;

            // ==== QUERY CALL ==== //
            var [rows, fields] = await pool.query(sql); 
            res.json({
                data : rows 
            })
            
        } catch (error) {
            console.log(error)
            res.json({
                status: "Error en getAllCentros --> centroController."
            })
        }
    },
    getCentroByFamiliaId : async (req,res) => {
        try {
            const { idFamilia } = req.params;
            var sql = SQL_CENTRO_BY_FAMILIA_ID;

            // ==== QUERY CALL ==== //
            var [rows, fields] = await pool.query(sql,[idFamilia]); 
            res.json({
                data : rows 
            })
            
        } catch (error) {
            console.log(error)
            res.json({
                status: "Error en getCentroByFamiliaId --> centroController."
            })
        }
    }
};


module.exports = centroController;