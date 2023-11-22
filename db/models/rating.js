const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Rating extends Model {
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
  Rating.init(
    {
      book_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
      book_raitng: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Rating',
    },
  );
  return Rating;
};
