
import Image from 'next/image'

import Link from 'next/link'

export default function Header() {
  
  return (
    
    <header>
     
      <Link href="/">
      
        <Image src="/img/logo.png" alt="Logo" width={106} height={107} />
     
      </Link>

      <nav>
        
        <a href="#inicio">Início</a>
        <a href="#clinica">Clínica</a>
        <a href="#farmacia">farmácia</a>
        <a href="#duvidas">Dúvidas</a>
        <Link href="/login">Minhas Consultas</Link>

      </nav>
   
    </header>
 
)
}

