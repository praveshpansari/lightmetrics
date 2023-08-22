import CommentService from "../services/comment.js";

export default class CommentController {
  commentService;
  constructor() {
    this.commentService = new CommentService();
  }

  getComments = async (req, res) => {
    const comments = await this.commentService.getComments();
    return res.status(200).send({ comments });
  };

  getComment = async (req, res) => {
    const comment = await this.commentService.getComment(req.params.id);
    return res.status(200).send({ comment });
  };

  createComment = async (req, res) => {
    const comment = await this.commentService.createComment(req.body);
    return res.status(200).send({ comment });
  };

  updateComment = async (req, res) => {
    const comment = await this.commentService.updateComment(
      req.body,
      req.params.id
    );
    return res.status(200).send({ msg: "Comment successfully updated!" });
  };

  deleteComment = async (req, res) => {
    await this.commentService.deleteComment(req.params.id);
    return res.status(200).send({ msg: "Comment successfully deleted!" });
  };
}
