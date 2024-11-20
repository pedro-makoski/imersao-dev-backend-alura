import conectarAoBanco from '../config/dbConfig.js'

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

export default async function getAllPosts() {
    const db = conexao.db("imersao-insta-byte");
    const colecao = db.collection("posts");

    return colecao.find().toArray();
}