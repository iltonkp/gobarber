module.exports = {
  dialect: 'postgres',
  //host: '0.0.0.0', Docker
  host: 'localhost', // PC
  port: '5433',
  username: 'docker',
  password: 'docker',
  database: 'gobarber',
  operatorAliases: false,
  define: {
    timestamps: true, // define createdAt and UpdatedAt
    underscored: true,
    underscoredAll: true
  }
}
