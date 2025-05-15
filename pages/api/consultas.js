
export default function handler(req, res) {
 
  const consultasFicticias = [
  
    {
      id: 1,
      data: '2025-05-15',
      hora: '10:00',
      petNome: 'Rex',
      tipoConsulta: 'Check-up',
    },
 
  ];

  const avaliacoesFicticias = [
   
    {
      id: 1,
      petNome: 'Rex',
      avaliacao: 'Excelente',
      comentario: 'Rex foi muito bem tratado, ótimo atendimento!',
    },
  
  ];

  res.status(200).json({
    
  consultas: consultasFicticias,
  
  avaliacoes: avaliacoesFicticias,
 
});

}
