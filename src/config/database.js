module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'docker',
  password: 'docker',
  database: 'gobarber',
  operatorAliases: false,
  define: {
    timestamps: true, // define createdAt and UpdatedAt
    undescored: true,
    undescoredAll: true
  }
}
