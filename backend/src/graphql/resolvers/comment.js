export default {
    Query: {
      getComments: (parent, args, { models }) => {
        return models.Comment.findAll({
          include: [{
            model: models.Post,
            as: 'posts'
          }],
          include: [{
            model: models.User,
            as: 'users'
          }]
        })
      }
    },
    Mutation: {
      createComment: (parent, { input }, { models }) => {
        return models.Comment.create({ ...input }, {
          include: [{
            model: models.Post,
            as: 'posts'
          }],
          include: [{
            model: models.User,
            as: 'users'
          }]
        })
      }
    }
  }