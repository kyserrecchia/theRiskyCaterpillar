module.exports = function(sequelize, DataTypes) {
  var Friend = sequelize.define("Friend", {
    name: {
      type: DataTypes.STRING,
    }
  },
  {
    timestamps: false
  });

  Friend.associate = function(models) {
    Friend.hasMany(models.Bet, {
      onDelete: "cascade"
    });
  };

  return Friend;
};