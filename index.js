//biblioteca para criar api
import express from "express";
import { Sequelize } from "sequelize";


const sequelize = new Sequelize('postgres', 'postgres', '123456', {
    host: 'localhost',
   
    dialect: 'postgres',
    define:{
        timestamps:false,
        freezeTableName:true
    }
  });

  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }


const app = express();

//diz que vamos parametros no body do tipo json 
app.use(express.json());

app.get('/teste', (request,response)=>{
   
    response.send('<h5 style = color:purple; > </h5> <button >😈 botao da maldade</button>');
});



//porta e mensagem de inicio 
app.listen(3000,()=>{console.log('Servidor rodando ...')});

// sequelize - npm install sequelize pg pg-hstore ( instalador do interpretador de sql);


