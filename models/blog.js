import mongoose, { Schema } from "mongoose";

const schema = mongoose.Schema;

const blogschema = new schema({
  title: {
    type: "string",
    required: true,
  },
  description: {
    type: "string",
    required: true,
  },

  image: {
    type: "string",
    required: true,
  },
  user: {
    type: "string",
    required: true,
  },
});

export default mongoose.model("Blog", blogschema);
