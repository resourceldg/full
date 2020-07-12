export default {
    Query: {
      getPosts: (parent, args, { models }) => {
        return models.Post.findAll({
          include: [{
            model: models.Tag,
            as: 'tags'
          }],
          include: [{
            model: models.Comment,
            as: 'comments'
          }]
        })
      }
    },
    Mutation: {
      createPost: (parent, { input }, { models }) => {
        return models.Post.create({ ...input }, {
          include: [{
            model: models.Tag,
            as: 'tags'
          }],
          include: [{
            model: models.Comment,
            as: 'comments'
          }]
        })
      }
    }
  }