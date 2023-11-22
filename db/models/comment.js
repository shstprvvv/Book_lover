const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Book, User }) {
      // define association here

      Comment.belongsTo(Book, { foreignKey: 'book_id' });
      Comment.belongsTo(User, { foreignKey: 'user_id' });
    }
  }
  Comment.init(
    {
      book_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
      user_comment: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'Comment',
    },
  );
  return Comment;
};
