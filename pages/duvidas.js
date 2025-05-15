
import DuvidaItem from "@/components/DuvidaItem";

export default function Duvidas() {
  
  return (
   
   <section id="duvidas">
    
      <div>
    
        <h2>Dúvidas Frequentes</h2>
    
        <DuvidaItem pergunta="Como agendar uma consulta?" resposta="Você pode agendar pela aba 'Minhas Consultas' após fazer login." />
   
        <DuvidaItem pergunta="Quais especialidades a clínica atende?" resposta="Atendemos clínica geral, vacinação e emergências." />
      
        {}
    
      </div>
    
      <img src="/img/faq-img.svg" alt="Imagem de dúvida" />
   
    </section>
 
);
}
