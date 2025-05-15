import dbConnect from '@/lib/mongodb';

import User from '@/models/User';

export default async function handler(req, res) {
 
  if (req.method !== 'POST') {
 
    return res.status(405).json({ erro: 'Método não permitido' });
 
  }

  const { email, senha } = req.body;

 
  try {
   
    await dbConnect();

    const user = await User.findOne({ email });

   
   
    if (!user || user.senha !== senha) {
   
      return res.status(401).json({ erro: 'Email ou senha incorretos' });
   
    }

    res.status(200).json({ id: user._id, email: user.email });
 
  } catch (erro) {
  
    console.error('Erro no login:', erro);

    res.status(500).json({ erro: 'Erro interno no servidor' });
 
  }

}
