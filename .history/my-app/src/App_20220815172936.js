import logo from './logo.svg';
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
              <Routes>
                 <Route element={<Home/>} path="/"  /> 
                 <Route element={<Admin/>} path="/gerencia"  /> 
                 <Route element={<AdminPage/>} path="/gerencia/Administrator"  /> 
                 
                <Route path="/conduta" element={<CodigoDeConduta/>} />
                <Route path="/promo" element={<PromocoesNovidades/>} />
                <Route path="/concluido" element={<SignatureGood/>} />
               
                <Route path="/codigodeconduta" element={()=>{ window.location.href = 'https://drive.google.com/file/d/1LYbTPm9cz4_8SU-sP-dahSaAOB12ZJAh/view?usp=sharing'}} exact/>
              </Routes>
            </Router>
    </div>
  );
}

export default App;
