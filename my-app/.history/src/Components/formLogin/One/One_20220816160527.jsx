import React from 'react'

const One = () => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
  return (


<div className="box-login">
        <form className="formLogin">
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
       
        </form>
      </div>
   
  )
}

export default One