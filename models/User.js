import mongoose, { Schema } from "mongoose";

const schema = mongoose.Schema;

const userSchema = new schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
    minlength: 6,
  },
});
export default mongoose.model("User", userSchema);
