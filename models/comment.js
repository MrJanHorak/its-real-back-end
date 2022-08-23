import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    commentText: String,
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Profile" }],
    changeType: Boolean,
  },
  {
    timestamps: true,
  }
);

const Comment = mongoose.model("Comment", commentSchema);

export { Comment };
