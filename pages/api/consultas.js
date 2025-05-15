

export default function handler(req, res) {
 
  const consultasFicticias = [
    
    {
      _id: 1,
      data: "2025-05-15",
      horario: "10:00",
      descricao: "Consulta de rotina para vacinação"
    },
  
  ];

 
  const avaliacoesFicticias = [
   
    {
      petNome: "nick e peteca",
      avaliacao: "Excelente",
      comentario: "nick e peteca foram muito bem tratados, ótimo atendimento!"
    },

  ];

  res.status(200).json({
    consultas: consultasFicticias,
    avaliacoes: avaliacoesFicticias,
  
  });
}
