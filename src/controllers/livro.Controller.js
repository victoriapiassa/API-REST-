import livro from "../models/livro.js";

class LivroController {  //cria a classe livroController responsavel pela requisicao e resposta 
    static async listarLivros (req, res) {
         const listaDeLivros = await livro.find({});
            res.status(200).json(listaDeLivros);
        };

    static async cadastrarLivro (req, res) {
        try { 
            const novoLivro = await livro.create(req.body);
             res.status(201).json({message: "Criado com sucesso", livro: novoLivro});

        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar livro` }); 
        }
    }
    

};

export default LivroController;