
import { useEffect } from 'react';

import Head from 'next/head';

import Header from '@/components/Header';

import Footer from '@/components/Footer';

import SectionDúvidas from '@/components/SectionDúvidas';

import Image from 'next/image';

export default function Home() {
  
  useEffect(() => {
   
    var elementosDuvida = document.querySelectorAll(".duvida");

  
    elementosDuvida.forEach(function (duvida) {
  
      duvida.addEventListener("click", function () {
  
        duvida.classList.toggle("ativa");
  
      });
  
    });
  
  }, []); 

 
 
 
 
 
 
 
  return (
    
    <>
      <Head>
       <title>Coração Peludo</title>
        <meta name="description" content="cuidado com a saúde do pet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"

          rel="stylesheet"
        />
      </Head>

      <main>
     
        <Header />

    
        <section id="inicio">
   
          <Image src="/img/start-img.svg" alt="Início" width={580} height={580} />
      
          <div>
       
            <h1>Cuidado e Amor para os Seus Companheiros de Quatro Patas</h1>
        
            <p className="paragrafo">
       
              No consultório veterinário Coração Peludo, nossa missão é...
        
            </p>
         
            <a className="botao" href="https://wa.me/55837333321" target="_blank">   Marque sua consulta  </a>
           
            <a className="botao-transparente" href="#clinica">Conheça nossa Clínica</a>
        
          </div>
        
          <Image className="absolute" src="/img/shape.svg" alt="Shape" width={300} height={300} />
       
        </section>

        <section id="clinica">
         
          <div>
         
            <h2>Cuidando da saúde do seu Peludo</h2>
           
            <p className="paragrafo">   Realizamos consultas clínicas, exames, vacinas, pet shop...    </p>
         
          </div>
        
      
          <Image src="/img/clinic-img.svg" alt="Clínica" width={480} height={480} />
      
      
        </section>

        <section id="farmacia" className="section-container">
         
          <div className="farmacia-wrapper">
         
         
            <div className="farmacia-text">
         
              <h2>Farmácia Pet</h2>
             
              <p>Cuidamos da saúde do seu pet com carinho e qualidade.</p>
              
              <ul className="farmacia-list">
               
               
               
                <li><i className="icon">💊</i> Suplementos para reforço imunológico</li>
               
                <li><i className="icon">🦴</i> Cuidados para articulações e pele</li>
               
                <li><i className="icon">🩺</i> Consultoria Farmacêutica</li>
              
                <li><i className="icon">🍖</i> Produtos Nutricionais Específicos</li>
            
            
            
            
              </ul>
              <Image  src="/img/Design_sem_nome__1_-removebg-preview.png"  alt="Produto Farmácia" width={300}   height={300}/>
           
            </div>
       
          </div>
     
        </section>


        <SectionDúvidas />
        
        
        <Footer />

      
        <div id="copyright">
        
        
          Desenvolvido por{' '}
       
       
          <a href="https://github.com/Paulinha-123" target="_blank">@Paulinha-123</a>
       
    
        </div>
   
      </main>
    </>
  );
}
