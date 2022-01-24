module.exports = {
  tableName: 'post', primaryKey: 'id',
  attributes: {

      id: {
        type: 'string',
        required: true,
        columnName: 'id',
      },

      title: {
        type: 'string',
        columnName: 'titre',
      },

      text : {
        type: 'string',
        columnName: 'texte',
      }


  },

};

