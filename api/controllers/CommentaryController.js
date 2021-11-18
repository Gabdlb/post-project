/**
 * CommentaryController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  getComment: async (req, res) => {
    try {
      const comments = await Commentary.find().select(['id', 'text', 'idPost']);
      return res.json(comments);
    } catch (e) {
      console.error(e);
      return res.serverError(e);
    }
  },

  createComment: async (req, res) => {
    try {
      const commentary = await Commentary.create({
        id: req.body.id,
        text: req.body.text,
        idPost: req.body.idPost
      }).fetch();
      return res.json(commentary);
    } catch (e) {
      console.error(e);
      return res.serverError(e);
    }
  },

  modifyComment: async (req, res) => {
    try {
      const commentary = await Commentary.update({
        id: req.params.id,
      }).set({
        text: req.body.text,
      });
      return res.json(commentary);
    } catch (e) {
      console.error(e);
      return res.serverError(e);
    }
  },

  deleteComment: async (req, res) => {
    try {
      const commentary = await Post.destroy({
        id: req.params.id,
      });
      return res.json(commentary);
    } catch (e) {
      console.error(e);
      return res.serverError(e);
    }
  }

};

