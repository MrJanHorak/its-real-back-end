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

function show(req, res){
  Post.findById(req.params.id)
  .then((post) => {
    res.status(200).json(post)
  })
  .catch((err) => {
    console.log(err);
    res.status(500).json(err)
  });
}

export { index, create, show };
