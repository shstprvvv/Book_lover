const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Favorites_book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Book, User }) {
      // define association here
      this.belongsTo(Book, {
        foreignKey: 'book_id',
      });
      this.belongsTo(User, {
        foreignKey: 'user_id',
      });
    }
  }
  Favorites_book.init(
    {
      book_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Favorites_book',
    },
  );
  return Favorites_book;
};
