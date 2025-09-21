import mongoose from "mongoose";

const livroSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId},
    titulo: { type: String, required: true},
    editora: { type: String },
    preco: { type: Number },
    paginas: { type: Number },
}, { versionKey: false }); // remove o campo __v que é criado automaticamente pelo mongoose

const livros = mongoose.model("livros", livroSchema);

export default livros;