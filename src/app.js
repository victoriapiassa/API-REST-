import express from "expresss"; // importa o express

const app = express();

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
})

app.get("/livros", (req, res) => { // define a rota /livros
    res.status(200).json(livros);
})

export default app;