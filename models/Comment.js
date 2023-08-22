import sequelize from "../utils/sequelize.js";
import { DataTypes } from "sequelize";

const Comment = sequelize.define("comments", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  parent_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  comment: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Comment.hasMany(Comment, {
  as: "Reply",
  foreignKey: "parent_id",
  onDelete: "CASCADE",
});

export default Comment;
