module.exports = function(sequelize, DataTypes) {
  var Bet = sequelize.define("Bet", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    },
    amount: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    favored: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    won: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  });

  Bet.associate = function(models) {
    Bet.belongsTo(models.Friend, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Bet;
};