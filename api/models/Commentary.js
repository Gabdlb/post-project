module.exports = {
  tableName: 'commentaire', primaryKey: 'id',
  attributes: {

    id: {
      type: String,
      required: true,
      columnName: 'id',
    },

    text: {
      type: String,
      columnName: 'texte',
    },

    idPost: {
      model: 'Post',
      columnName: 'idPost'
    }

  },

};

