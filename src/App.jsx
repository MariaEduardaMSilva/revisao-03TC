import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <h1>Login</h1>
      </header>

      <main>
        <form action="">
          <div>
            <label htmlfor="usuario">Usuário</label>
            <input type="text" id='usuario' placeholder='Digite seu usuario' />
          </div>
          <div>
            <label htmlFor="senha">Senha</label>
            <input type="password" id='senha' placeholder='Digite sua senha' />
          </div>
          
          <button>Entrar</button>
        </form>
      </main>
    </>
  )
}

export default App
