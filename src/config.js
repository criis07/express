require('dotenv').config();

module.exports = {
    app: {
        port: process.env.PORT,
    },
    mysql:{
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        BD: process.env.MYSQL_DATABASE || 'prueba',
        port: process.env.MYSQL_DB_PORT,
        url: process.env.MYSQL_URL
    }
}