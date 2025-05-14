import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;


if (!MONGODB_URI) {

  throw new Error('Por favor, defina a variável de ambiente MONGODB_URI');

}

let isConnected = false;

export default async function dbConnect() {
 
  if (isConnected) return;

  try {
   
    await mongoose.connect(MONGODB_URI);
  
    isConnected = true;
  
    console.log('Conectado ao MongoDB com sucesso!');
 
  } catch (error) {
  
    console.error('Erro ao conectar ao MongoDB:', error);

  }

}

