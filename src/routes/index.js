import express from "express";
import livros from "./livrosRouters.js";

const router = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Curso de Node.js"));
};

export default router;
