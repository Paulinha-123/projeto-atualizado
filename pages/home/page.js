import Header from './components/Header'

import SectionInicio from './components/SectionInicio'

import SectionClinica from './components/SectionClinica'

import SectionFarmacia from './components/SectionFarmacia'

import SectionDuvidas from './components/SectionDuvidas'

import Footer from './components/Footer'

export default function Home() {

  return (

      <main>

      <Header />

      <SectionInicio />
      
      <SectionClinica />
      
      <SectionFarmacia />
      
      <SectionDuvidas />
      
      <Footer />
      
      <div id="copyright">
      
        Desenvolvido por <a href="https://github.com/Paulinha-123" target="_blank">@Paulinha-123</a>
      
      
      </div>
    
    </main>
  
)
}
