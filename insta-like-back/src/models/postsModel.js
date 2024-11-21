import conectarAoBanco from '../config/dbConfig.js'

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

export async function getAllPosts() {
    const db = conexao.db("imersao-insta-byte");
    const colecao = db.collection("posts");

    return colecao.find().toArray();
}

export async function criarPost(conteudo) {
    const db = conexao.db("imersao-insta-byte");
    const colecao = db.collection("posts");

    return colecao.insertOne(conteudo);
}