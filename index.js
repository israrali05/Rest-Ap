import express from "express";
const app = express();
import mongoose from "mongoose";
const port = process.env.PORT || 3000;
import router from "./routes/user_routes.js"
import blogRouter from "./routes/blog_route.js";

app.use(express.json())
app.use("/api/user",router)
app.use("/api/blog", blogRouter)

mongoose
  .connect(
    "mongodb+srv://israrali0121:israr1234@cluster0.n5edel5.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => app.listen(port))
  .then(() =>
    console.log("connect to Database and Listening to localhost 5000")
  )
  .catch((err) => console.log(err));