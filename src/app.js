import express from "express"; // importa o express

import conectaNaDatabase from "./config/dbConnect.js";

const conexao = await conectaNaDatabase(); // aguarda a conexao com o banco de dados 

conexao.on("error", (erro) => {  //caso ocorra um erro na conexao mostra o erro no console
    console.error("Erro de conexão", erro);
});

conexao.once("open", () => {  //se a conexao for sucesso mostra a mensagem no console 
    console.log("Conexão com o banco feita com sucesso")
});

const app = express();
app.use(express.json()); //habilita o express para ler json no corpo da requisicao

const livros = [
    { 
        id: 1,
        titulo:" O Senhor dos Aneis: Sociedade do Anel"
    },
    {
        id: 2,
        titulo: "Crime e Castigo"
    
    }
]

function buscaLivro(id) {
    return livros.findIndex(livro => { // findIndex retorna o indice do elemento que satisfaz a condicao
        return livro.id === Number(id);
    })
}

app.get("/", (req, res) => {  //define a rota raiz
    res.status(200).send("Curso de Node.Js")
});

app.get("/livros", (req, res) => { // define a rota /livros
    res.status(200).json(livros);
});

app.get("/livros/:id", (req, res) => { 
 const index = buscaLivro(req.params.id)
 res.status(200).json(livros[findIndex]);
});

app.post("/livros", (req, res) => {
    livros.push(req.body); //adiciona um livri novo no final do array
    res.status(201).send("Livro cadastrado com sucesso!"); // send é um metodo de resposta para os clientes 

});

app.put("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id); //pega o id do livro que vem na requisicao
    livros[index].titulo = req.body.titulo; //atualiza o titulo do livro com o novo titulo que vem no corpo da requisicao
    res.status(200).json(livros);
});

app.delete("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1); // splice remove um elemento do array, o primeiro parametro é o indice e o segundo é a quantidade de elementos a serem removidos
    res.status(200).send("Livro removido com sucesso");
})

export default app;

// mongodb+srv://admin:<db_password>@cluster0.mpxgaz2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0