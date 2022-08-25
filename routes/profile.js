import {Router} from "express";
import pipeUserId, {getProfile, updateCoverImage, updateProfileImage} from "../controllers/profile.js";
import {checkUploadPath, uploadImageToCloud} from "../controllers/post.js";
import upload from "../middlewares/fileStorage.js";

const router = Router();

router.get("/", pipeUserId, getProfile);

router.post("/updateProfilePic",
  checkUploadPath,
  upload.single("profile"),
  uploadImageToCloud,
  updateProfileImage,
  getProfile
);

router.post("/updateCoverImage",
  checkUploadPath,
  upload.single("cover"),
  uploadImageToCloud,
  updateCoverImage,
  getProfile
);

export default router;