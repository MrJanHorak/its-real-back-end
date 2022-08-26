import { comment } from "../models/comment.js";

function index(req, res) {
  Comment.find({})
    .then((comment) => res.json(comments))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
}

export { index };
