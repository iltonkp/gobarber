module.exports = {
  dialect: 'postgres',
  host: '0.0.0.0',
  port: '5433',
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
