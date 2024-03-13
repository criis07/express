const bd = require('../../DB/mysql')
const TABLA = 'usuarios';

function getAll(){
    return bd.getAll(TABLA)
}

module.exports = {
    getAll
};