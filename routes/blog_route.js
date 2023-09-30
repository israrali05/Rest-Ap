import express from "express";
import { addblog, deleteblog, getAllBlog, getbyid, updateBlog } from "../controller/blog_controller.js";
const blogRouter = express.Router()


blogRouter.get("/", getAllBlog)
blogRouter.post("/add", addblog)
blogRouter.put("/update/:id", updateBlog)
blogRouter.delete("/:id", deleteblog)
blogRouter.get("/:id", getbyid)





export default blogRouter