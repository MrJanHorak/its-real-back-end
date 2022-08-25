import mongoose from "mongoose";

const profileSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, lowercase: true, unique: true },
    userName: String,
    firstName: String,
    lastName: String,
    location: Array,
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
    postLikes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
    commentLikes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
    photo: { type: String },
  },
  {
    timestamps: true,
  }
);

const Profile = mongoose.model("Profile", profileSchema);

export { Profile };
