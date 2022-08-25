import User from "../models/user.js";

export function getProfile(req, res) {
  const userId = req.userId;
  User
    .findById(userId)
    .populate("posts")
    .populate("bookmarks")
    .populate("followers")
    .populate("following")
    .then(profile => {
      res.json(profile);
    });
}

export function updateProfileImage(req, res, next) {
  const {userId} = req.body;
  User.findByIdAndUpdate(
    userId,
    {
      $set: {image: req.imageUrl}
    },
    {},
    (err, doc) => {
      req.userId = userId;
      next();
    }
  );
}

export function updateCoverImage(req, res, next) {
  const {userId} = req.body;
  User.findByIdAndUpdate(
    userId,
    {
      $set: {coverImage: req.imageUrl}
    },
    {},
    (err, doc) => {
      req.userId = userId;
      next();
    }
  );
}

export default function pipeUserId(req, res, next) {
  req.userId = req.query.userId;
  next();
}