import express from 'express';
import {listarTodosPosts, postarNovoPost, uploadImagem, procurarID, atualizarNovoPost} from '../controller/postsController.js';
import multer from 'multer';
import cors from "cors"

const corsOption = {
    origin: "http://localhost:8000",
    optionsSuccessStatus: 200
}

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "./uploads");
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({dest:"./uploads", storage});

const routes = (app) => {
    app.use(express.json());
    app.use(cors(corsOption))

    app.get("/posts", listarTodosPosts);   
    app.post("/posts", postarNovoPost);
    app.post("/upload", upload.single("imagem"), uploadImagem)
    app.get("/posts/:id", procurarID);
    app.put("/upload/:id", atualizarNovoPost)
};

export default routes;