import { MongoClient } from "mongodb";

export default async function conectarAoBanco(stringConexao) {
    let mongoClient;

    try {
        mongoClient = new MongoClient(stringConexao);
        console.log("Conectando ao servidor");
        await mongoClient.connect();
        console.log("Conectado ao Mongo DB atlas com sucesso");

        return mongoClient;
    } catch(erro) {
        console.log("Falha na conexão ao banco ", erro);
        process.exit();
    }
}