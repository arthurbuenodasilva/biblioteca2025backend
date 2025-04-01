//biblioteca para criar api
import express from "express";

const app = express();

//diz que vamos parametros no body do tipo json 
app.use(express.json());

app.get('/teste', (request,response)=>{
   
    response.send('<h5 style = color:purple; > </h5> <button >😈 botao da maldade</button>');
});



//porta e mensagem de inicio 
app.listen(3000,()=>{console.log('Servidor rodando ...')});

