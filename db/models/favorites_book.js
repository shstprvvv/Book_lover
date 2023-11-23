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
      book_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      indexes: [
        {
          unique: true,
          fields: ['book_id', 'user_id'],
        },
      ],
    },
  );

  return Favorites_book;
};
