import { useEffect, useState } from "react";

import { useRouter } from "next/router";


export default function MinhasConsultas() {

  const router = useRouter();

  const [consultas, setConsultas] = useState([]);

  const [avaliacoes, setAvaliacoes] = useState([]);

  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
  
    const token = localStorage.getItem("token");


    if (!token) {
    
      router.push("/");


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

      setConsultas(consultasFicticias);
   
      setAvaliacoes(avaliacoesFicticias);
  
      setCarregando(false);
    }
 
  }, [router]);

  return (
    <div style={{ padding: "2rem" }}>

      
      <h1>Minhas Consultas</h1>

    
      {carregando ? (

        <p>Carregando...</p>

      ) : consultas.length === 0 ? (

      
       
        <p>Você não possui consultas agendadas ainda.</p>

      ) : (
        <ul>
          {consultas.map((consulta) => (

           
           <li key={consulta._id}>
            
           
              <strong>Data:</strong> {consulta.data} |{" "}
            
            
              <strong>Horário:</strong> {consulta.horario} |{" "}
            
              <strong>Descrição:</strong> {consulta.descricao}

              {avaliacoes.length > 0 && (
              
              <div>
             
                  <h3>Avaliações do Pet</h3>
                
                  {avaliacoes.map((avaliacao, index) => (
                  
                  <div key={index}>
                    
                      <p><strong>Pet:</strong> {avaliacao.petNome}</p>
                  
                    
                      <p><strong>Avaliação:</strong> {avaliacao.avaliacao}</p>
                   
                      <p><strong>Comentário:</strong> {avaliacao.comentario}</p>
             
                    </div>
                 
                 ))}
             
                </div>
            
            )}
            
        
            </li>
      
           ))}
       
       
        </ul>
     
     )}
  
    </div>

);
}
