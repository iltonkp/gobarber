class ScheduleController {
  async index (req, res) {
    return res.render('schedule/index')
  }
}

module.exports = new ScheduleController()
