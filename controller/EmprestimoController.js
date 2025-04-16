import Emprestimo from "../model/EmprestimoModel.js";
import Livro from "../model/LivroModel.js";
import Usuario from "../model/UsuarioModel.js";

async function listar(req, res) {
    const respostaBanco = await Emprestimo.findAll();
    res.json(respostaBanco);
}

async function selecionar(req, res) {
    const id = req.params.id;
    const respostaBanco = await Emprestimo.findByPk(id);
    res.json(respostaBanco);
}

async function emprestar(req, res) {
    const idlivro = req.body.idlivro;
    const idusuario = req.body.idusuario;

    if(!idlivro){
        res.status(422).send('O parâmetro idlivro é obrigatorio !');
    }
    if(!idusuario){
        res.status(422).send('O parâmetro idusuario é obrigatorio !');
    }
    
    //verifica se o livro existe
    const livroBanco = await Livro.findByPk(idlivro);
    const usuarioBanco = await Livro.findByPk(idusuario);
    if(!livroBanco){
        res.status(422).send("Livro nao encontrado !")
    }if(!usuarioBanco){
        res.status(422).send("Usuario nao encontrado !")
    }
    res.send("Emprestimo realizado 👍");
    

   // const respostaBanco = await Emprestimo.create(req.body);
    //res.json(respostaBanco);
    
}

async function devolver(req, res) {
    const nomeautor = req.body.nomeautor;
    const nascimento = req.body.nascimento;
    const biografia = req.body.biografia;
    const nacionalidade = req.body.nacionalidade;
    const foto = req.body.foto;

    const idautor = req.params.id;

    const respostaBanco = await Autor.update(
        { nomeautor, nascimento, biografia, nacionalidade, foto },
        { where: { idautor } });
    res.json(respostaBanco);
}



export default { listar, selecionar, emprestar, devolver };