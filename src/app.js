import express from "express"; // importa o express

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

app.get("/", (req, res) => {  //define a rota raiz
    res.status(200).send("Curso de Node.Js")
});

app.get("/livros", (req, res) => { // define a rota /livros
    res.status(200).json(livros);
});

app.post("/livros", (req, res) => {
    livros.push(req.body); //adiciona um livri novo no final do array
    res.status(201).send("Livro  cadstrado com sucesso!"); // send é um metodo de resposta para os clientes 

});

export default app;