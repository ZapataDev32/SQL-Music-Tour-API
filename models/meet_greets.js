"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Meet_greet extends Model {
    static associate({ Band, Event }) {
      // band
      Meet_greet.belongsTo(Band, {
        foreignKey: "band_id",
        as: "bands",
      });

      // event
      Meet_greet.belongsTo(Event, {
        foreignKey: "event_id",
        as: "events",
      });
    }
  }

  Meet_greet.init(
    {
      meet_greet_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      band_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      event_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      meet_start_time: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      meet_end_time: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Meet_greet",
      tableName: "meet_greets",
      timestamps: false,
    }
  );
  return Meet_greet;
};
