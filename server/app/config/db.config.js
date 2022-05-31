module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "Mal3k$aM",
  DB: "game_db",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
