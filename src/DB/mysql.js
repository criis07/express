const mysql = require('mysql2')
const config = require('../config')

const bdconfig = {
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.BD,
    port: config.mysql.port,
}

console.log(bdconfig);

let conexion;

function conectMysqlDB() {
    conexion = mysql.createConnection(bdconfig);

    conexion.connect((err) =>{
        if(err){
            console.log('error',err);
            setTimeout(conectMysqlDB, 200);
        }
        else{
            console.log('Conectado exitosamente');
        }
    });
    conexion.on('error', err =>{
        console.log('[db error]',err);
        if(err.code ==='PROTOCOL_CONNECTION_LOST'){
            conectMysqlDB();
        }else{
            throw err;
        }
    })
} 
conectMysqlDB();

function getAll(tabla){
    const query = `SELECT * from ${tabla};` 
    return new Promise((resolve, reject)=>{
        conexion.query(query, (err, res) => {
            if(err) return reject(err);
            resolve(res);
        })
    })
}

function getById(tabla, id){

}

function add(tabla, payload){

}

function updateById(tabla, id){

}

function deleteById(tabla, id){

}

module.exports = {
    getAll,
    getById,
    add,
    updateById,
    deleteById
}