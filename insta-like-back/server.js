import express from 'express';
import routes from './src/route/postRoutes.js';

const app = express();
app.use('/uploads', express.static("uploads"));

app.listen(3000, () => {
    console.log("Servidor Escutando...");
});

routes(app);