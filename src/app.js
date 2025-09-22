import express from "express"; // importa o express

import conectaNaDatabase from "./config/dbConnect.js";

import livro from ".models/Livros.js";

const conexao = await conectaNaDatabase(); // aguarda a conexao com o banco de dados 

conexao.on("error", (erro) => {  //caso ocorra um erro na conexao mostra o erro no console
    console.error("Erro de conexão", erro);
});

conexao.once("open", () => {  //se a conexao for sucesso mostra a mensagem no console 
    console.log("Conexão com o banco feita com sucesso")
});

const app = express();
app.use(express.json()); //habilita o express para ler json no corpo da requisicao



app.get("/", (req, res) => {  //define a rota raiz
    res.status(200).send("Curso de Node.Js")
});

app.get("/livros", async (req, res) => { // define a rota /livros
    const listaDeLivros = await livro.find({});
    res.status(200).json(listaDeLivros);
});

app.get("/livros/:id", (req, res) => { 
 const index = buscaLivro(req.params.id)
 res.status(200).json(livro[findIndex]);
});

app.post("/livros", (req, res) => {
    livro.push(req.body); //adiciona um livri novo no final do array
    res.status(201).send("Livro cadastrado com sucesso!"); // send é um metodo de resposta para os clientes 

});

app.put("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id); //pega o id do livro que vem na requisicao
    livros[index].titulo = req.body.titulo; //atualiza o titulo do livro com o novo titulo que vem no corpo da requisicao
    res.status(200).json(livro);
});

app.delete("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livro.splice(index, 1); // splice remove um elemento do array, o primeiro parametro é o indice e o segundo é a quantidade de elementos a serem removidos
    res.status(200).send("Livro removido com sucesso");
})

export default app;

// mongodb+srv://admin:<db_password>@cluster0.mpxgaz2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0