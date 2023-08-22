import Comment from "../models/Comment.js";

export default class CommentService {
  createComment = async (commentData) => {
    const comment = await Comment.create({
      name: commentData.name,
      comment: commentData.comment,
      parent_id: commentData.parent,
    });
    return comment;
  };

  getComments = async () => {
    const comments = await Comment.findAll();
    return comments;
  };

  getComment = async (id) => {
    const comment = await Comment.findByPk(id);
    return comment;
  };

  updateComment = async (commentData, id) => {
    const comment = await Comment.update(
      {
        name: commentData.name,
        comment: commentData.comment,
        parent_id: commentData.parent,
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
    await Comment.delete({ where: { id: id } });
    return;
  };
}
