import express from "express";
import LivroController from "../controllers/livro.Controller.js";

const router = express.Router(); //

router.get("/livros", LivroController.listarLivros);

// app.get("/livros", async (req, res) => { // define a rota /livros
 //   const listaDeLivros = await livro.find({});
  //  res.status(200).json(listaDeLivros);
// });

export default router;