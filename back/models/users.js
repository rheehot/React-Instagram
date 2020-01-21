/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_name: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    user_password: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    user_nickname: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    user_intro: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    user_profile: {
      type: "BLOB",
      allowNull: true
    }
  }, {
    tableName: 'users',
    timestamps: false,
  });
};
