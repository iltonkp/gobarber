module.exports = (sequelize, DataTypes) => {
  const Appointment = sequelize.define('Appointment', {
    date: DataTypes.DATE
  })

  Appointment.associate = models => {
    Appointment.belongsto(models.User, { foreignKey: 'user_id' })
    Appointment.belongsto(models.User, { foreignKey: 'provider_id' })
  }

  return Appointment
}
