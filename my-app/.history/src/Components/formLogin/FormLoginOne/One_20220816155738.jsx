import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const One = () => {
  return (
    <div>
                <h1>Acesso</h1>
          <input
            type="text"
            placeholder="E-mail"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Senha"
            value={pass}
            onChange={(e) => {
              setPass(e.target.value);
            }}
          />
          <Link to="/">Esqueci minha senha</Link>
          
            <input type="submit" />
      
      
          <p style={{textDecoration: 'underline', cursor: 'pointer'}} >Criar conta</p>{" "}
     
          <div className="boxCenterCheck">
          
              <input type="checkbox" />
              <label style={{marginLeft:"8px"}}  >Lembre de mim</label>
          
          </div>
    </div>
  )
}

export default One