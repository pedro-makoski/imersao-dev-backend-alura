import getAllPosts from "../models/postsModel.js";

export default async function listarTodosPosts(req, res) {
    const posts = await getAllPosts();
    res.status(200).json(posts);
};