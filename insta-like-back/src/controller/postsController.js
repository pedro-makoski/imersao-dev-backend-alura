import {getAllPosts, criarPost, atualizarPost} from "../models/postsModel.js";
import gerarDescricaoComGemini from "../services/serviceGemini.js"
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
        imagemUrl: `uploads/${req.file.originalname}`,
        alt: ""
    };
    
    try {
        const postCriado = await criarPost(novoPost);
        const fotoAtualizada = `uploads/${postCriado.insertedId}.png`
        fs.renameSync(req.file.path, fotoAtualizada)
        res.status(200).json(postCriado);
    } catch(error) {
        console.error(error.message);
        res.status(500).json({
            "Erro": "Falha na requisição" 
        })
    }
}

function buscarPostsPorID(ID, data, reference) {
    return data.findIndex((post) => {
        return post[reference] == ID;
    });
}

export async function procurarID(req, res) {
    try {
        const posts = await getAllPosts();
        const index = buscarPostsPorID(req.params.id, posts, "_id");
        res.status(200).json(posts[index]);
    } catch(error) {
        res.status(500).json({"Erro": "Item não encontrado"});
    }
}

export async function atualizarNovoPost(req, res) {
    const id = req.params.id;
    const urlImagem = `http://localhost:3000/uploads/${id}.png`;
    
    try {
        const imgBuffer = fs.readFileSync(`uploads/${id}.png`)
        const descricao = await gerarDescricaoComGemini(imgBuffer);

        const postAtualizado = {
            imagemUrl: urlImagem,
            descricao: descricao,
            alt: req.body.alt
        }

        const postCriado = await atualizarPost(id, postAtualizado);
        res.status(200).json(postCriado);
    } catch(error) {
        console.error(error.message);
        res.status(500).json({
            "Erro": "Falha na requisição" 
        })
    }
}