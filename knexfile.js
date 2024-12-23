const { DB_POST, DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_URL } = process.env;
module.exports = {
    client: "mysql2",
    connection: DB_URL || {
        host: DB_HOST,
        port: DB_POST,
        user: DB_USER,
        password: DB_PASSWORD,
        database: DB_NAME
    }
};