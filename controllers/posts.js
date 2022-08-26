import { Post } from "../models/post.js";

function index(req, res) {
  Post.find({})
    .then((posts) => res.json(posts))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
}

function create(req, res) {
  Post.create(req.body)
    .then(res.status(201).json(req.body))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
}

function show(req, res) {
  Post.findById(req.params.id)
    .then((post) => {
      res.status(200).json(post);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
}

function update(req, res) {
  Post.findById(req.params.id)
    .then((post) => {
      post.updateOne(req.body, { new: true }).then(() => {
        res.status(200).json(post);
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
}

function deletePost(req, res) {
  Post.findById(req.params.id)
    .then((post) => {
      post.delete().then(() => {
        res.status(204).end();
      });
    })
    .catch((err) => {
      console.log(err);
      res.stauts(500).json(err);
    });
}

export { index, create, show, update, deletePost as delete };
