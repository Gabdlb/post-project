module.exports = {


  getPost: async (req, res) => {
    try {
      const posts = await Post.find().select(['id', 'title', 'text']);
      return res.json(posts);
    } catch (e) {
      console.error(e);
      return res.serverError(e);
    }
  },

  geOnePost: async (req, res) => {
    try {
      const posts = await Post.find({id: req.params.id});
      return res.json(posts);
    } catch (e) {
      console.error(e);
      return res.serverError(e);
    }
  },

  createPost: async (req, res) => {
    try {
      const post = await Post.create({
        id: req.body.id,
        title: req.body.title,
        text: req.body.text,
      }).fetch();
      return res.json(post);
    } catch (e) {
      console.error(e);
      return res.serverError(e);
    }
  },

  modifyPost: async (req, res) => {
    try {
      const post = await Post.update({
        id: req.params.id,
      }).set({
        title: req.body.title,
        text: req.body.text,
      });
      return res.json(post);
    } catch (e) {
      console.error(e);
      return res.serverError(e);
    }
  },

  deletePost: async (req, res) => {
    try {
      const post = await Post.destroy({
        id: req.params.id,
      });
      return res.json(post);
    } catch (e) {
      console.error(e);
      return res.serverError(e);
    }
  }
};

