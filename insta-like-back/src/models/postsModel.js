import 'dotenv/config';
import { ObjectId } from 'mongodb';
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

export async function atualizarPost(id, novoPost) {
    const db = conexao.db("imersao-insta-byte");
    const colecao = db.collection("posts");
    const objectId = ObjectId.createFromHexString(id)

    return colecao.updateOne({_id: new ObjectId(objectId)}, {$set: novoPost});
}