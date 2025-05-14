
import Image from 'next/image'

export default function SectionDúvidas() {
  
  return (
  
  <section id="duvidas">
     
      <Image src="/img/faq-img.svg" alt="FAQ" width={540} height={540} />

      <div>
      
        <h2>Alguma dúvida?</h2>

      
        {[
       
          {
       
            pergunta: 'É necessário agendar consulta?',
            resposta: 'Para oferecer um atendimento mais tranquilo...'
          },
         
          
          {
            pergunta: 'A clínica faz cirurgias?',
            resposta: 'Sim, nossa clínica realiza diferentes tipos de cirurgias...'
          },
         
        
          {
            pergunta: 'A clínica realiza exames laboratoriais?',
            resposta: 'Sim, nossa clínica realiza diferentes tipos de exames...'
          },
         
        
          {
            pergunta: 'A clínica tem atendimento comportamental para pets?',
            resposta: 'Sim, nossa clínica oferece atendimento comportamental...'
          }
      
        ].map((item, index) => (
        
        <div className="duvida" key={index}>
          
            <h3>{item.pergunta}</h3>
           
            <Image src="/img/arrow-down.svg" alt="Seta" width={24} height={24} />
           
            <p className="paragrafo">{item.resposta}</p>
       
          </div>
      
      ))}
     
      </div>
   
    </section>
  )
}
