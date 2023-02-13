module.exports = async ({ models }) => {
  const data = [
    {
      _id: '63e1ddd7208c7376ed628df0',
      code: 'uk',
      name: 'Українська',
    },
    {
      _id: '63e1ddd7208c7376ed628df1',
      code: 'ru',
      name: 'Русский',
    },
    {
      _id: '63e1ddd7208c7376ed628df2',
      code: 'en',
      name: 'English',
    },
  ]

  return await models.LanguagesModel.insertMany(data)
}
