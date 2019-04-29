const { User } = require('../models')
const { Op } = require('sequelize')

class DashboardController {
  async index (req, res) {
    const { user } = req.session
    const providers = await User.findAll({
      where: {
        provider: true,
        [Op.and]: [
          {
            id: {
              [Op.ne]: user.id
            }
          }
        ]
      }
    })

    return res.render('dashboard', { providers })
  }
}

module.exports = new DashboardController()
