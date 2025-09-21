import app from "./src/app.js"; // importa o app do arquivo app.js


const PORT = 3000; // define a porta que o servidor vai escutar 


app.listen(PORT, () => {
    console.log("servidor escutando");
});