'use client'; 

import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';


export default function Register() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const router = useRouter(); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, senha }),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Cadastro realizado com sucesso!');
        router.push('/login');
      } else {
        alert(data.erro || 'Erro ao cadastrar');
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
      alert('Erro de rede ou servidor fora do ar.');
    }
  };

  return (
    <>
      <Head>
        <title>Cadastro - Coração Peludo</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <header>
        <Image src="/img/logo.png" alt="Coração Peludo" width={80} height={80} />
      </header>

      <main>
        <h2>Minhas consultas</h2>
        <h1 className="titulo rosa">Cadastre-se</h1>

        <form onSubmit={handleSubmit} id="registerForm">
          <div className="input-group">
            <img src="https://img.icons8.com/ios-filled/24/000000/new-post.png" className="icon" />
            <input type="email" placeholder="Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>

          <div className="input-group">
             <img src="https://img.icons8.com/ios-filled/24/000000/lock--v1.png" className="icon" />
            <input type="password" placeholder="Senha" name="senha" value={senha} onChange={(e) => setSenha(e.target.value)}  required/>
          </div>

          <button type="submit" className="btn">Cadastrar →</button>
        </form>

        <p>Já tem uma conta? <Link href="/login">Faça login aqui</Link></p>
      </main>

      <footer>
        <p>WhatsApp: (83) 7333-3221</p>
        <p>Email: contato@coracaopeludo.com.br</p>
        <p>Endereço: Centro da cidade</p>
      </footer>

      <style jsx>{`
        /* Insira aqui seu CSS */
      `}</style>
    </>
  );
}
