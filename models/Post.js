import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    location: { type: String, required: true },
    beforePic: { type: String, required: true },
    afterPic: { type: String, required: true },
    beforeDate: Date,
    afterDate: Date,
    description: String,
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Profile" }],
    changeType: Boolean,
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("Post", postSchema);

export { Post };
