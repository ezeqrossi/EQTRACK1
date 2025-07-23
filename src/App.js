import React, { useState } from 'react';
import './index.css';

function App() {
  const [pantalla, setPantalla] = useState('menu');
  const [tipo, setTipo] = useState('');
  const [subtipo, setSubtipo] = useState('');

  const resetFormulario = () => {
    setTipo('');
    setSubtipo('');
    setPantalla('registro');
  };

  return (
    <div className="container">
      {pantalla === 'menu' && (
        <>
          <h1 style={{ color: 'gold' }}>EQTrack – By EQRCRYPTO</h1>
          <button className="primary" onClick={() => setPantalla('registro')}>Registrar Operación</button><br/>
          <button className="primary" onClick={() => alert('Historial aún no implementado')}>Historial</button><br/>
          <button className="primary" onClick={() => alert('Importar archivo aún no implementado')}>Importar</button><br/>
        </>
      )}

      {pantalla === 'registro' && !tipo && (
        <>
          <h2 style={{ marginBottom: '5px' }}>Seleccionar operación</h2>
          <button className="green" onClick={() => setTipo('compra')}>Compra</button>
          <button className="red" onClick={() => setTipo('venta')}>Venta</button>
        </>
      )}

      {pantalla === 'registro' && tipo && !subtipo && (
        <>
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
            <button className="primary" onClick={() => setPantalla('formulario')}>Continuar</button>
          </div>
        </>
      )}

      {pantalla === 'formulario' && (
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
          <button className="primary" onClick={() => setPantalla('menu')}>Volver al menú</button>
        </>
      )}
    </div>
  );
}

export default App;