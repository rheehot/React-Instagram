/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('likes', {
    like_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    like_user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'users',
        key: 'user_id'
      }
    },
    like_post_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'posts',
        key: 'post_id'
      }
    }
  }, {
    tableName: 'likes',
    timestamps: false,
  });
};
