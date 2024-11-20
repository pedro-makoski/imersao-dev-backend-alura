import express from 'express';
import listarTodosPosts from '../controller/postsController.js';

const routes = (app) => {
    app.use(express.json());

    app.get("/posts", listarTodosPosts);
};

export default routes;