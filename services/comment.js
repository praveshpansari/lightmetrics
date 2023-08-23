import Comment from "../models/Comment.js";

export default class CommentService {
  createComment = async (commentData) => {
    const comment = await Comment.create({
      name: commentData.name,
      comment: commentData.comment,
      parentId: commentData.parent,
    });
    return comment;
  };

  getComments = async () => {
    const comments = await Comment.findAll();
    return comments;
  };

  getComment = async (id) => {
    const comment = await Comment.findByPk(id, {
      include: [
        {
          model: Comment,
          as: "Replies", // This should match the alias you defined for the association
        },
      ],
    });
    return comment;
  };

  updateComment = async (commentData, id) => {
    const comment = await Comment.update(
      {
        name: commentData.name,
        comment: commentData.comment,
        parentId: commentData.parent,
      },
      {
        where: {
          id: id,
        },
      }
    );
    return comment;
  };

  deleteComment = async (id) => {
    await Comment.destroy({ where: { id: id } });
    return;
  };
}
