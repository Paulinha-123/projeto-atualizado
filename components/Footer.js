
import Image from 'next/image'

export default function Footer() {
  
  return (
    
    <footer>
     
      <div>
     
        <nav>
        
          <Image src="/img/logo.png" alt="Logo" width={106} height={107} />
          <p>🕒 Funcionamos das 7:30 ás 18:00 🐾 Sempre pensando no seu peludo!</p>
       
        </nav>
     
      </div>

      <div>
       
        <nav>
         
          <strong className="titulo">Clique para retornar</strong>
        
          <a href="#inicio">Início</a>
        
          <a href="#clinica">Clínica</a>
        
          <a href="#farmacia">Farmácia</a>
        
          <a href="#duvidas">Dúvidas</a>
        </nav>
      
      </div>

      <div>
       
        <strong className="titulo">Encontre-nos</strong>
       
        <p>WhatsApp: (83) 7333321</p>
       
        <p>Email: contato@coraçãopeludo.com.br</p>
       
        <p>Endereço: Centro da cidade</p>
     
      </div>
    
    </footer>
 
)
}
