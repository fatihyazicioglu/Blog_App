import express from "express";
import { getPosts,createPost , updatePost, deletePost, getSinglePost} from "../controllers/posts.js";

const router = express.Router();

//https://localhost:5000/posts
//GET POST DELETE UPDATE PATCH

router.get("/", getPosts);
router.get("/:id", getSinglePost);
router.post("/", createPost);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);

export default router;