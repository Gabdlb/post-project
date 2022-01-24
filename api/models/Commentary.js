module.exports = {
  tableName: 'commentaire', primaryKey: 'id',
  attributes: {

    id: {
      type: 'string',
      required: true,
      columnName: 'id',
    },

    text: {
      type: 'string',
      columnName: 'texte',
    },

    idPost: {
      model: 'Post',
      columnName: 'idPost'
    }

  },

};

