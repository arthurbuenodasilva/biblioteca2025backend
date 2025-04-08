import { Sequelize,DataTypes } from "sequelize";
//configuração da conexão com o banco de dados
const sequelize = new Sequelize('biblioteca2025', 'postgres', 'postgres', {
    host: 'localhost',
    port: 5433,
    dialect: 'postgres',
    define: {
        timestamps: false,
        freezeTableName: true
    }
});

export default sequelize;