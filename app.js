require('dotenv').config();

if(!process.env.TOKEN && !process.env.KEY){
    throw new Error('No hay configuración con  API key y con Token');
}