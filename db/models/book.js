const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      // define association here
      this.belongsTo(User, {
        foreignKey: 'user_id',
      });
    }
  }
  Book.init(
    {
      nameBook: DataTypes.STRING,
      writer: DataTypes.STRING,
      img: DataTypes.TEXT,
      user_id: DataTypes.INTEGER,
      owner_comment: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Book',
    },
  );
  return Book;
};
