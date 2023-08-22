import sequelize from "../utils/sequelize.js";
import { DataTypes } from "sequelize";

const Comment = sequelize.define("comments", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  parentId: {
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
  as: "Replies",
  foreignKey: "parentId",
  onDelete: "CASCADE",
});

export default Comment;
