module.exports = {
    port: "8889",
    HOST: "localhost",
    USER: "root",
    PASSWORD: "root",
    DB: "freightlinkr",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};
