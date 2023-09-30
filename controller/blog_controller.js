import blog from "../models/blog.js";

export const getAllBlog = async (req, res, next) => {
  let blogs;
  try {
    blogs = await blog.find();
  } catch (error) {
    return console.log(error);
  }

  if (!blogs) {
    return res.status(404).json({ message: "No blog found" });
  }

  return res.status(200).json({ blogs});
};

export const addblog = async (req, res, next) => {
    const {title, description,image,user} = req.body
    const blogs = new blog({
        title,
        description,
        image,
        user,
    })
    try {
        await blogs.save()
    } catch (error) {
        console.log(error)
    }
    return res.status(200).json({blogs})

};
 
export const updateBlog = async(req, res, next)=>{
    const {title, description}= req.body
    const blogid = req.params.id
    let blogs
    try {
        blogs = await blog.findByIdAndUpdate(blogid,{
            title,
            description
        })

    } catch (error) {
     return console.log(error)   
    }
    if(!blog){
    return res.status(500).json({message: "Unable to Update Blog"})

    }
    return res.status(200).json({blogs})
}


export const getbyid = async (req, res, next)=>{
    const blogid = req.params.id
    let blogs
    try {
        blogs = await blog.findById(blogid)
    } catch (error) {
        return console.log(error)
    }
    if(!blog){
        return res.status(404).json({message: "No Blog Found"})
    }
    return res.status(200).json({blogs})
}


export const deleteblog =  async(req, res, next ) =>{
    const id = req.params.id
    let blogs
    try {
        blogs = await blog.findByIdAndRemove(id)
    } catch (error) {
        return console.log(error)
    }
    if(!blogs){
        return res.status(500).json({message: "Unable to delete blog"})
    }
    return res.status(200).json({blogs})
}