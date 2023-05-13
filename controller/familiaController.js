const pool = require("../database/index")
const SQL_INFO_FAMILIA = 'SELECT * FROM FAMILIA WHERE idFamilia = ?';
const SQL_FAMILIA_LOG_IN = 'SELECT * FROM FAMILIA WHERE correo = ? AND pass = ?';
const familiaController = {

    // TODAS LAS CITAS DE UNA FAMILIA 
    getAllInfoFamilia: async (req,res) => {
        try {
            const { idFamilia } = req.params;
            var sql = SQL_INFO_FAMILIA;

            // ==== QUERY CALL ==== //
            var [rows, fields] = await pool.query(sql,[idFamilia]); 
            res.json({
                data : rows 
            })
            
        } catch (error) {
            console.log(error)
            res.json({
                status: "Error en getAllInfoFamilia --> familiaController."
            })
        }
    },
    logIn: async (req,res) => {
        try {
            const { correo, pass } = req.params;
            var sql = SQL_FAMILIA_LOG_IN;

            // ==== QUERY CALL ==== //
            var [rows, fields] = await pool.query(sql,[correo,pass]); 
            res.json({
                data : rows 
            })
            
        } catch (error) {
            console.log(error)
            res.json({
                status: "Error en logIn --> familiaController."
            })
        }
    }
};


module.exports = familiaController;