/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('posts', {
    post_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    post_photo: {
      type: "BLOB",
      allowNull: false
    },
    post_content: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    post_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    post_user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'users',
        key: 'user_id'
      }
    }
  }, {
    tableName: 'posts',
    timestamps: false,
  });
};
