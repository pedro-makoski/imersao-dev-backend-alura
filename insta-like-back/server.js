import express from 'express';

const posts = [
    {
      id: 1,
      descricao: "Uma foto teste",
      imagem: "https://placecats.com/millie/300/150"
    },
    {
      id: 2,
      descricao: "Um gato preto explorando um jardim florido",
      imagem: "https://placecats.com/black/300/150"
    },
    {
      id: 3,
      descricao: "Um gatinho curioso cheirando uma rosa",
      imagem: "https://placecats.com/kitten/300/150"
    },
    {
      id: 4,
      descricao: "Silhueta de um gato contra o pôr do sol",
      imagem: "https://placecats.com/sunset/300/150"
    },
    {
      id: 5,
      descricao: "Um gato preguiçoso tomando sol",
      imagem: "https://placecats.com/lazy/300/150"
    },
    {
      id: 6,
      descricao: "Um gato brincando com um novelo de lã",
      imagem: "https://placecats.com/yarn/300/150"
    }
];

const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log("Servidor Escutando...");
});

app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});

function buscarPostsPorID(ID) {
    return posts.findIndex((post) => {
        return post.id === Number(ID);
    });
}

app.get("/posts/:id", (req, res) => {
    const index = buscarPostsPorID(req.params.id);
    res.status(200).json(posts[index]);
});