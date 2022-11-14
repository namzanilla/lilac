const { LanguagesModel } = require('./../mongoose/models')

module.exports = {
  getList: async (ctx) => {
    ctx.body = await LanguagesModel.find().select({
      name: 1,
      code: 1,
    })
  },
}
