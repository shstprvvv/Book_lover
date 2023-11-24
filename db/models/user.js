const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Book, Rating, Comment, Favorites_book }) {
      // define association here
      this.hasMany(Book, {
        foreignKey: 'user_id',
      });

      this.hasMany(Rating, {
        foreignKey: 'user_id',
      });
      this.hasMany(Comment, {
        foreignKey: 'user_id',
      });

      this.hasMany(Favorites_book, {
        foreignKey: 'user_id',
      });
   

    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      hashpass: DataTypes.STRING,
      phone: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'User',
    },
  );
  return User;
};
