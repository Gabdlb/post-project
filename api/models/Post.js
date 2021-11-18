module.exports = {
  tableName: 'post', primaryKey: 'id',
  attributes: {

      id: {
        type: String,
        required: true,
        columnName: 'id',
      },

      title: {
        type: String,
        columnName: 'titre',
      },

      text : {
        type: String,
        columnName: 'texte',
      }


  },

};

