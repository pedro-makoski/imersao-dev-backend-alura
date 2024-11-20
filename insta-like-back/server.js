import express from 'express';
import routes from './src/route/postRoutes.js';

const app = express();

app.listen(3000, () => {
    console.log("Servidor Escutando...");
});

routes(app);



/*function buscarPostsPorID(ID) {
    return posts.findIndex((post) => {
        return post.id === Number(ID);
    });
}

app.get("/posts/:id", (req, res) => {
    const index = buscarPostsPorID(req.params.id);
    res.status(200).json(posts[index]);
});*/