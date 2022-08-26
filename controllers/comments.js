import { comment } from "../models/comment.js";

function index(req, res) {
  Comment.find({})
    .then((comment) => res.json(comments))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
}

function create(req, res) {
  Comment.create(req.body)
    .then(res.status(201).json(req.body))
    .catch((err) => {
      console.log(err);
      res.stauts(500).json(err);
    });
}

function show(req, res) {
  Comment.findById(req.params.id)
    .then((comment) => {
      res.status(200).json(comment);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
}

function update(req, res) {
  Comment.findById(req.params.id)
    .then((comment) => {
      comment.updateOne(req.body, { new: true }).then(() => {
        res.status(200).json(comment);
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
}

export { index, create };
