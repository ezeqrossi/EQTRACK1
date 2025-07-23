import React, { useState } from 'react';
import './index.css';

function App() {
  const [tipo, setTipo] = useState('');
  const [subtipo, setSubtipo] = useState('');
  const [paso, setPaso] = useState(1);

  const handleContinuar = () => {
    if (tipo && subtipo) setPaso(2);
  };

  return (
    <div className="container">
      {paso === 1 && (
        <>
          <h1 style={{ color: 'gold' }}>EQTrack – By EQRCRYPTO</h1>
          <h2 style={{ marginBottom: '5px' }}>Seleccionar operación</h2>
          <button className="green" onClick={() => setTipo('compra')}>Compra</button>
          <button className="red" onClick={() => setTipo('venta')}>Venta</button>
          {tipo && (
            <div style={{ marginTop: '20px' }}>
              <h3>Tipo de operación:</h3>
              {['P2P', 'F2F', 'OTC', 'Spot', 'Exchange'].map(op => (
                <button
                  key={op}
                  className="primary"
                  style={{ backgroundColor: subtipo === op ? '#2563eb' : '#1e3a8a' }}
                  onClick={() => setSubtipo(op)}
                >{op}</button>
              ))}
              <div style={{ marginTop: '20px' }}>
                <button className="primary" onClick={handleContinuar}>Continuar</button>
              </div>
            </div>
          )}
        </>
      )}

      {paso === 2 && (
        <>
          <h2 style={{ color: tipo === 'compra' ? 'lime' : 'red' }}>
            {tipo === 'compra' ? 'REGISTRAR COMPRA' : 'REGISTRAR VENTA'}
          </h2>
          <form>
            <input type="date" /><br/>
            <input placeholder="Cripto" /><br/>
            <input placeholder="Monto (Fiat)" /><br/>
            <input placeholder="Precio" /><br/>
            <input placeholder="Cantidad Cripto" /><br/>
            <input placeholder="Banco Origen/Destino" /><br/>
            <input placeholder="Contraparte" /><br/>
            <textarea placeholder="Notas" rows="3" /><br/>
          </form>
        </>
      )}
    </div>
  );
}

export default App;