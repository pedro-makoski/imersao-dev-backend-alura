import express from 'express';

const app = express();
app.listen(3000, () => {
    console.log("Servidor Escutando...");
});

app.get("/", (req, res) => {
    res.status(200).send("Boas vindas à imersão!");
});