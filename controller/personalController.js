const pool = require("../database/index")
const SQL_PERSONAL_CONTACTOS = 'SELECT p.* '+
                               'FROM PERSONAL p '+
                               'JOIN CENTRO c ON p.idCentro = c.idCentro '+
                               'WHERE p.idCentro = ( '+
                               'SELECT idCentro '+
                               'FROM PERSONAL '+
                               'WHERE idPersonal = ? '+
                                ') AND p.idPersonal != ?;';
const SQL_GET_ALL_INFO_PERSONAL = ' SELECT * FROM PERSONAL WHERE correo = ? AND pass = ? ';

const personalController = {

    // TODAS LAS CITAS DE UNA FAMILIA 
    getContactosById: async (req,res) => {
        try {
            const { idPersonal } = req.params;
            var sql = SQL_PERSONAL_CONTACTOS;

            // ==== QUERY CALL ==== //
            var [rows, fields] = await pool.query(sql,[idPersonal,idPersonal]); 
            res.json({
                data : rows 
            })
            
        } catch (error) {
            console.log(error)
            res.json({
                status: "Error en getContactosById --> personalController."
            })
        }
    },
    logIn: async (req,res) => {
        try {
            const { correo, pass } = req.params;
            var sql = SQL_GET_ALL_INFO_PERSONAL;

            // ==== QUERY CALL ==== //
            var [rows, fields] = await pool.query(sql,[correo,pass]); 
            res.json({
                data : rows 
            })
            
        } catch (error) {
            console.log(error)
            res.json({
                status: "Error en logIn --> personalController."
            })
        }
    }
};


module.exports = personalController;