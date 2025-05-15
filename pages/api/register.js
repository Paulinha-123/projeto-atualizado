import dbConnect from '@/lib/mongodb';

import User from '@/models/User';

export default async function handler(req, res) {
 
  if (req.method !== 'POST') {
  
    return res.status(405).json({ erro: 'Método não permitido' });
 
  }

  const { email, senha } = req.body;

  if (!email || !senha) {
   
    return res.status(400).json({ erro: 'Email e senha são obrigatórios' });
 
  }

  try {
   
    await dbConnect();

    const userExistente = await User.findOne({ email });

   
    if (userExistente) {
    
      return res.status(409).json({ erro: 'Usuário já existe' });
    
    }

    const novoUsuario = await User.create({ email, senha });

    
    res.status(201).json({ id: novoUsuario._id, email: novoUsuario.email });
  
  } catch (erro) {
   
    console.error('Erro no registro:', erro);
   
    res.status(500).json({ erro: 'Erro interno no servidor' });
 
  }

}
