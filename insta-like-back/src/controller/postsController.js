import {getAllPosts, criarPost} from "../models/postsModel.js";
import fs from "fs"

export async function listarTodosPosts(req, res) {
    const posts = await getAllPosts();
    res.status(200).json(posts);
};

export async function postarNovoPost(req, res) {    
    const novoPost = req.body;
    
    try {
        const postCriado = await criarPost(novoPost);
        res.status(200).json(postCriado);
    } catch(error) {
        console.error(error.message);
        res.status(500).json({
            "Erro": "Falha na requisição" 
        })
    }
}

export async function uploadImagem(req, res) {
    const novoPost = {
        descricao: "",
        imagemUrl: req.file.originalname,
        alt: ""
    };
    
    try {
        const postCriado = await criarPost(novoPost);
        const fotoAtualizada = `uploads/${postCriado.insertedId}.png`
        fs.renameSync(req.file.originalname, fotoAtualizada)
        res.status(200).json(postCriado);
    } catch(error) {
        console.error(error.message);
        res.status(500).json({
            "Erro": "Falha na requisição" 
        })
    }
}